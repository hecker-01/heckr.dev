const prismBase = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0";
const languages = [
    "javascript",
    "python",
    "bash",
    "css",
    "markup",
    "yaml",
    "docker",
];

let codeToolsPromise;

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Could not load ${src}`));
        document.head.append(script);
    });
}

function loadStylesheet(href) {
    return new Promise((resolve, reject) => {
        const stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = href;
        stylesheet.onload = resolve;
        stylesheet.onerror = () => reject(new Error(`Could not load ${href}`));
        document.head.append(stylesheet);
    });
}

async function copyText(text) {
    if (navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return;
        } catch {
            // Use the local fallback when clipboard permission is unavailable.
        }
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();

    if (!copied) throw new Error("Could not copy code to the clipboard");
}

export function loadCodeTools() {
    if (!codeToolsPromise) {
        codeToolsPromise = Promise.all([
            loadStylesheet("https://prismjs.catppuccin.com/mocha.css"),
            loadScript(`${prismBase}/prism.min.js`),
        ]).then(async () => {
            for (const language of languages) {
                await loadScript(
                    `${prismBase}/components/prism-${language}.min.js`,
                );
            }
        });
    }

    return codeToolsPromise;
}

export function highlightCode() {
    window.Prism?.highlightAll();
}

export function installCopyCodeHandler() {
    const handleCopy = async (event) => {
        const button = event.target.closest("button[data-clipboard-target]");
        if (!button) return;

        const code = document.querySelector(button.dataset.clipboardTarget);
        if (!code) return;

        try {
            await copyText(code.textContent);
            button.textContent = "copied!";
            button.classList.add("text-catppuccin-green");
            window.setTimeout(() => {
                button.textContent = "copy";
                button.classList.remove("text-catppuccin-green");
            }, 2000);
        } catch {
            // Copying may be blocked by browser permissions or page context.
        }
    };

    document.addEventListener("click", handleCopy);
    return () => document.removeEventListener("click", handleCopy);
}
