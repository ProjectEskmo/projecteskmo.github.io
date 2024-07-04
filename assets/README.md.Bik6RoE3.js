import{_ as s,c as a,o as i,a1 as e}from"./chunks/framework.C_Ot_QD9.js";const t="/assets/eskmo-logo.Bd0kyKsJ.jpg",b=JSON.parse('{"title":"Eskmo Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md"}'),n={name:"README.md"},l=e('<div align="center"><h1 id="eskmo-documentation" tabindex="-1">Eskmo Documentation <a class="header-anchor" href="#eskmo-documentation" aria-label="Permalink to &quot;Eskmo Documentation&quot;">​</a></h1><img src="'+t+'" height="100px"><br><br><p><a href="https://github.com/ProjectEskmo/eskmo.org/blob/master/LICENSE.txt" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT license"></a></p></div><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>First, install Node.js from <a href="https://nodejs.org" target="_blank" rel="noreferrer">nodejs.org</a>.</p><p>Once installed, you can set up <code>npx</code> globally by running:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span></span></code></pre></div><p>Then:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><h2 id="developing" tabindex="-1">Developing <a class="header-anchor" href="#developing" aria-label="Permalink to &quot;Developing&quot;">​</a></h2><p>To start the local build server with hot module reloading and an eslint watcher, execute:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><h2 id="building" tabindex="-1">Building <a class="header-anchor" href="#building" aria-label="Permalink to &quot;Building&quot;">​</a></h2><p>To compile the entire site into a static project, use the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><h2 id="previewing" tabindex="-1">Previewing <a class="header-anchor" href="#previewing" aria-label="Permalink to &quot;Previewing&quot;">​</a></h2><p>To preview the built site locally, run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preview</span></span></code></pre></div><p>If you want to verify the build without using VitePress, navigate to the <code>dist</code> directory and start a local server:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd .vitepress/dist; python -m http.server</span></span></code></pre></div><h2 id="deploy" tabindex="-1">Deploy <a class="header-anchor" href="#deploy" aria-label="Permalink to &quot;Deploy&quot;">​</a></h2><p>If you haven&#39;t installed <code>gh-pages</code> yet, run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gh-pages</span></span></code></pre></div><p>Push the built files to the `gh-pages branch:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deploy</span></span></code></pre></div>',23),p=[l];function h(o,d,r,c,g,k){return i(),a("div",null,p)}const v=s(n,[["render",h]]);export{b as __pageData,v as default};
