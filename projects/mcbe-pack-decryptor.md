---
title: MCBE Pack Decryptor
slug: mcbe-pack-decryptor
description: Python CLI that decrypts encrypted Minecraft Bedrock Edition marketplace packs using AES-CFB.
coverImage: /screenshot-mcbe-decryptor.png
accentColor: green
tags: [Python, Minecraft, Cryptography, CLI]
github: https://github.com/hecker-01/MCBE_Pack_Decryptor
status: stale
unlisted: false
---

## About

MCBE Pack Decryptor is a single-file Python CLI tool that decrypts encrypted Minecraft Bedrock Edition marketplace resource packs. Marketplace content ships with AES-CFB-encrypted assets and a `contents.json` manifest that maps each file to its individual decryption key. This tool reads that manifest, decrypts every listed asset, and writes the plaintext output to a new folder - all you need is the 32-byte pack key.

It handles nested subpacks automatically and provides optional verbose logging so you can watch each file get processed in real time.

## Features

- **AES-CFB decryption** of marketplace resource packs using PyCryptodome
- **Automatic key loading** from `.key` files placed alongside the pack folder
- **Per-file key resolution** via the encrypted `contents.json` manifest
- **Subpack support** - recursively decrypts all subpack directories
- **Verbose mode** - toggle detailed per-file logging at runtime
- **Graceful fallback** - files without a listed key are copied as-is instead of being skipped
- **Clear error reporting** with colored terminal output for failures

## Technical Highlights

The core decryption pipeline reads the `contents.json` manifest (skipping the first `0x100` bytes of header), decrypts it with the master pack key, then builds a lookup map of relative paths to per-file keys:

```python
with open(contents_json_path, 'rb') as f:
    encrypted_data = f.read()

decrypted_data = aes_cfb_decrypt(encrypted_data[0x100:], decryption_key, decryption_key[:16])
contents = json.loads(decrypted_data.decode('utf-8'))

content_map = {
    info["path"]: info.get("key", "").encode()
    for info in contents.get("content", [])
}
```

Each file is then decrypted individually using its own key from the map, with the first 16 bytes of that key used as the AES initialization vector.

:::hint info
A valid 32-byte pack key is required. The tool can load it automatically from a `.key` file named after the pack folder, or you can enter it manually at the prompt.
:::

### Usage

Place the encrypted pack folder and its `.key` file next to the script:

```text
folder/
├── encrypted-resource-pack/
│   ├── contents.json
│   └── ...other encrypted files
├── encrypted-resource-pack.key
└── mcbe_pack_decryptor.py
```

Then run:

```bash
python3 mcbe_pack_decryptor.py
```

Decrypted output lands in a new `<pack-name>-decrypted/` directory.

:::details Full CLI session example

```text
┏┻┓┳┳┓┏┓ ┏┓┳┓  MCBE_Pack_Decryptor
┗━┓┃┃┃┃  ┃┃┃┃  Version 1.0
┗┳┛┛ ┗┗┛━┣┛┻┛  Made by @hecker-01

Enable verbose logging? (y/N): y
Input folder (should be in the same directory as this script): my-pack
Key loaded from my-pack.key
Processing my-pack...
Decrypted: my-pack/textures/blocks/stone.png
Decrypted: my-pack/textures/items/diamond.png
✓ Successfully processed my-pack.
No subpacks found.
Decryption complete! Output folder: /home/user/my-pack-decrypted
```

:::
