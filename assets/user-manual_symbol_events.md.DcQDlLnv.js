import{_ as t,c as a,o as e,a1 as s}from"./chunks/framework.C_Ot_QD9.js";const y=JSON.parse('{"title":"商品檔事件","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"user-manual/symbol/events.md","filePath":"user-manual/symbol/events.md"}'),i={name:"user-manual/symbol/events.md"},n=s(`<h1 id="商品檔事件" tabindex="-1">商品檔事件 <a class="header-anchor" href="#商品檔事件" aria-label="Permalink to &quot;商品檔事件&quot;">​</a></h1><p>下表為商品檔有關事件：</p><table tabindex="0"><thead><tr><th>事件</th><th>註冊方式</th><th>回傳物件</th></tr></thead><tbody><tr><td>商品檔更新</td><td><a href="/">@eskmo.event.symbol.update</a></td><td><a href="#UpdateSymbolResult">UpdateSymbolResult</a></td></tr><tr><td>資券餘額更新</td><td><a href="/">@eskmo.event.smybol.marginlimit</a></td><td><a href="#MarginLimitResult">MarginLimitResult</a></td></tr></tbody></table><h2 id="updatesymbolresult" tabindex="-1">UpdateSymbolResult <a class="header-anchor" href="#updatesymbolresult" aria-label="Permalink to &quot;UpdateSymbolResult&quot;">​</a></h2><p>商品檔更新事件，通常發生於登入後斷線重連</p><table tabindex="0"><thead><tr><th style="text-align:center;">屬性</th><th style="text-align:center;">型別</th><th>說明</th><th>備註</th></tr></thead><tbody><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td></td><td></td></tr></tbody></table><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@eskmo.event.symbol.update</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onUpdateSymbols</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;商品檔更新: &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, data)</span></span></code></pre></div><h2 id="marginlimitresult" tabindex="-1">MarginLimitResult <a class="header-anchor" href="#marginlimitresult" aria-label="Permalink to &quot;MarginLimitResult&quot;">​</a></h2><p>資券餘額更新事件，透過 API <code>&lt;symbol&gt;.update.marginlimit</code> 呼叫</p><table tabindex="0"><thead><tr><th style="text-align:center;">屬性</th><th style="text-align:center;">型別</th><th>說明</th><th>備註</th></tr></thead><tbody><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td></td><td></td></tr></tbody></table><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@eskmo.event.symbol.marginlimit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onMarginLimit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;資券餘額更新: &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, data)</span></span></code></pre></div>`,11),l=[n];function h(d,r,p,o,k,c){return e(),a("div",null,l)}const u=t(i,[["render",h]]);export{y as __pageData,u as default};
