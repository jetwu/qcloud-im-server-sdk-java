import{e as n}from"./app.0635dc3d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u8FD0\u8425\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u8425\u7BA1\u7406" aria-hidden="true">#</a> \u8FD0\u8425\u7BA1\u7406</h1><h2 id="\u62C9\u53D6\u8FD0\u8425\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u8FD0\u8425\u6570\u636E" aria-hidden="true">#</a> \u62C9\u53D6\u8FD0\u8425\u6570\u636E</h2><p>App \u7BA1\u7406\u5458\u53EF\u4EE5\u901A\u8FC7\u8BE5\u63A5\u53E3\u62C9\u53D6\u6700\u8FD1 30 \u5929\u7684\u8FD0\u8425\u6570\u636E\uFF0C\u53EF\u62C9\u53D6\u7684\u5B57\u6BB5\u89C1\u4E0B\u6587\u53EF\u62C9\u53D6\u7684\u8FD0\u8425\u5B57\u6BB5\u3002</p><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">GetAppInfoRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetAppInfoRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> requestFields <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;ChainIncrease&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ChainDecrease&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
request<span class="token punctuation">.</span><span class="token function">setRequestField</span><span class="token punctuation">(</span>requestFields<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">GetAppInfoResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>operation<span class="token punctuation">.</span><span class="token function">getAppInfo</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u4E0B\u8F7D\u6700\u8FD1\u6D88\u606F\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u6700\u8FD1\u6D88\u606F\u8BB0\u5F55" aria-hidden="true">#</a> \u4E0B\u8F7D\u6700\u8FD1\u6D88\u606F\u8BB0\u5F55</h2><p>App \u7BA1\u7406\u5458\u53EF\u4EE5\u901A\u8FC7\u8BE5\u63A5\u53E3\u83B7\u53D6 App \u4E2D\u6700\u8FD1 7 \u5929\u4E2D\u67D0\u5929\u67D0\u5C0F\u65F6\u7684\u6240\u6709\u5355\u53D1\u6216\u7FA4\u7EC4\u6D88\u606F\u8BB0\u5F55\u7684\u4E0B\u8F7D\u5730\u5740\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><ul><li>\u4E0B\u8F7D\u6D88\u606F\u8BB0\u5F55\u91CC\u7684\u56FE\u7247\u3001\u8BED\u97F3\u3001\u6587\u4EF6\u548C\u77ED\u89C6\u9891\uFF0C\u6B64\u529F\u80FD\u4EC5\u9002\u7528\u4E8E 4.X \u7248\u672C IM SDK\uFF0C\u53EF\u901A\u8FC7\u804A\u5929\u8BB0\u5F55\u4E2D\u7684 URL \u5B57\u6BB5\u8FDB\u884C\u4E0B\u8F7D\u3002\u5982\u60A8\u4F7F\u7528 2.X \u6216 3.X \u7248\u672C\u7684 IM SDK\uFF0C\u60A8\u5C06\u65E0\u6CD5\u901A\u8FC7\u8BE5\u65B9\u6CD5\u83B7\u53D6\u5230\u4EE5\u4E0A\u4FE1\u606F\uFF0C\u5982\u60A8\u9700\u8981\u6B64\u529F\u80FD\uFF0C\u8BF7\u60A8\u5347\u7EA7\u81F3 4.X \u7248\u672C\u3002</li><li>\u6D88\u606F\u8BB0\u5F55\u4EE5\u65E5\u5FD7\u6587\u4EF6\u5F62\u5F0F\u4FDD\u5B58\u5E76\u4F7F\u7528 GZip \u538B\u7F29\uFF0C\u901A\u8FC7\u8BE5\u63A5\u53E3\u83B7\u53D6\u5230\u4E0B\u8F7D\u5730\u5740\u540E\uFF0C\u8BF7\u81EA\u884C\u4E0B\u8F7D\u5E76\u5904\u7406\uFF1B\u6D88\u606F\u8BB0\u5F55\u6587\u4EF6\u6BCF\u5C0F\u65F6\u4EA7\u751F\u4E00\u6B21\uFF0C\u4F8B\u5982 0 \u70B9\uFF0800:00~00:59\uFF09\u7684\u6570\u636E\u5728 01:00 \u540E\u5F00\u59CB\u5904\u7406\uFF0C\u4E00\u822C 1 \u5C0F\u65F6\u5185\u5904\u7406\u5B8C\u6BD5\uFF08\u6D88\u606F\u8F83\u591A\u5219\u5904\u7406\u65F6\u95F4\u8F83\u957F\uFF09\uFF1B\u6587\u4EF6\u6709\u6548\u671F 7 \u5929\uFF0C\u65E0\u8BBA\u662F\u5426\u4E0B\u8F7D\u8FC7\uFF0C\u90FD\u4F1A\u5728 7 \u5929\u540E\u5220\u9664\uFF0C\u88AB\u5220\u9664\u540E\u4E0D\u652F\u6301\u91CD\u65B0\u5BFC\u51FA\uFF1B\u83B7\u53D6\u5230\u7684\u4E0B\u8F7D\u5730\u5740\u5B58\u5728\u6709\u6548\u671F\uFF0C\u8BF7\u5728\u8FC7\u671F\u524D\u8FDB\u884C\u4E0B\u8F7D\uFF0C\u82E5\u5730\u5740\u5931\u6548\uFF0C\u8BF7\u901A\u8FC7\u8BE5\u63A5\u53E3\u91CD\u65B0\u83B7\u53D6\u3002</li><li>\u6B64\u63A5\u53E3\u4EC5\u7528\u4E8E\u4E0B\u8F7D\u6700\u8FD1 7 \u5929\u7684\u804A\u5929\u8BB0\u5F55\u6587\u4EF6\uFF0C\u7528\u4E8E\u5907\u4EFD\u6216\u6570\u636E\u7EDF\u8BA1\u7B49\u3002\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8BE5\u63A5\u53E3\u7528\u4E8E\u7EBF\u4E0A\u5B9E\u65F6\u4E1A\u52A1\u3002</li></ul></div><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">GetHistoryRequest</span> request <span class="token operator">=</span> <span class="token class-name">GetHistoryRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">chatType</span><span class="token punctuation">(</span><span class="token class-name">ChatType</span><span class="token punctuation">.</span>C2C<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">msgTime</span><span class="token punctuation">(</span><span class="token string">&quot;2015120121&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">GetHistoryResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>operation<span class="token punctuation">.</span><span class="token function">getHistory</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u83B7\u53D6\u670D\u52A1\u5668-ip-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u670D\u52A1\u5668-ip-\u5730\u5740" aria-hidden="true">#</a> \u83B7\u53D6\u670D\u52A1\u5668 IP \u5730\u5740</h2><p>\u57FA\u4E8E\u5B89\u5168\u7B49\u8003\u8651\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u83B7\u77E5\u670D\u52A1\u5668\u7684 IP \u5730\u5740\u5217\u8868\uFF0C\u4EE5\u4FBF\u8FDB\u884C\u76F8\u5173\u9650\u5236\u3002App \u7BA1\u7406\u5458\u53EF\u4EE5\u901A\u8FC7\u8BE5\u63A5\u53E3\u83B7\u5F97 SDK\u3001\u7B2C\u4E09\u65B9\u56DE\u8C03\u6240\u4F7F\u7528\u5230\u7684\u670D\u52A1\u5668 IP \u5730\u5740\u5217\u8868\u6216 IP \u7F51\u6BB5\u4FE1\u606F\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6B64\u63A5\u53E3\u4EC5\u652F\u6301\u83B7\u53D6\u4E2D\u56FD\u5927\u9646\u5730\u533A\u7684\u6240\u6709 IM \u63A5\u5165\u65B9\u5F0F\u7684 IP \u5730\u5740\u6216 IP \u7F51\u6BB5\u4FE1\u606F\u3002</p></div><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">GetIpListRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetIpListRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">GetIpListResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>op<span class="token operator">~</span>eration<span class="token punctuation">.</span><span class="token function">getIpList</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,15);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};
