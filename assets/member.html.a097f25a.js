import{e as s}from"./app.0635dc3d.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=s(`<h1 id="\u5168\u5458\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u5168\u5458\u63A8\u9001" aria-hidden="true">#</a> \u5168\u5458\u63A8\u9001</h1><h2 id="\u5168\u5458\u63A8\u9001-1" tabindex="-1"><a class="header-anchor" href="#\u5168\u5458\u63A8\u9001-1" aria-hidden="true">#</a> \u5168\u5458\u63A8\u9001</h2><ul><li>\u652F\u6301\u5168\u5458\u63A8\u9001\u3002</li><li>\u652F\u6301\u6309\u7528\u6237\u5C5E\u6027\u63A8\u9001\u3002</li><li>\u652F\u6301\u6309\u7528\u6237\u6807\u7B7E\u63A8\u9001\u3002</li><li>\u7BA1\u7406\u5458\u63A8\u9001\u6D88\u606F\uFF0C\u63A5\u6536\u65B9\u770B\u5230\u6D88\u606F\u53D1\u9001\u8005\u662F\u7BA1\u7406\u5458\u3002</li><li>\u7BA1\u7406\u5458\u6307\u5B9A\u67D0\u4E00\u5E10\u53F7\u5411\u5176\u4ED6\u5E10\u53F7\u63A8\u9001\u6D88\u606F\uFF0C\u63A5\u6536\u65B9\u770B\u5230\u53D1\u9001\u8005\u4E0D\u662F\u7BA1\u7406\u5458\uFF0C\u800C\u662F\u7BA1\u7406\u5458\u6307\u5B9A\u7684\u5E10\u53F7\u3002</li><li>\u652F\u6301\u6D88\u606F\u79BB\u7EBF\u5B58\u50A8\uFF0C\u4E0D\u652F\u6301\u6F2B\u6E38\u3002</li><li>\u7531\u4E8E\u5168\u5458\u63A8\u9001\u9700\u8981\u4E0B\u53D1\u7684\u5E10\u53F7\u6570\u91CF\u5DE8\u5927\uFF0C\u4E0B\u53D1\u5B8C\u5168\u90E8\u5E10\u53F7\u9700\u8981\u4E00\u5B9A\u65F6\u95F4\uFF08\u6839\u636E\u5E10\u53F7\u603B\u6570\u800C\u5B9A\uFF0C\u4E00\u822C\u5728\u4E00\u5206\u949F\u5185\uFF09\u3002</li></ul><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">TIMTextMsgElement</span> msg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TIMTextMsgElement</span><span class="token punctuation">(</span><span class="token string">&quot;hi, beauty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TIMMsgElement</span><span class="token punctuation">&gt;</span></span> msgBody <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ImPushRequest</span> request <span class="token operator">=</span> <span class="token class-name">ImPushRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">msgRandom</span><span class="token punctuation">(</span><span class="token number">9312457L</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">msgBody</span><span class="token punctuation">(</span>msgBody<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">fromAccount</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">msgLifeTime</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ImPushResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imPush</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u8BBE\u7F6E\u5E94\u7528\u5C5E\u6027\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5E94\u7528\u5C5E\u6027\u540D\u79F0" aria-hidden="true">#</a> \u8BBE\u7F6E\u5E94\u7528\u5C5E\u6027\u540D\u79F0</h2><p>\u6BCF\u4E2A\u5E94\u7528\u53EF\u4EE5\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7684\u7528\u6237\u5C5E\u6027\uFF0C\u6700\u591A\u53EF\u4EE5\u6709 10 \u4E2A\u3002\u901A\u8FC7\u672C\u63A5\u53E3\u53EF\u4EE5\u8BBE\u7F6E\u6BCF\u4E2A\u5C5E\u6027\u7684\u540D\u79F0\uFF0C\u8BBE\u7F6E\u5B8C\u6210\u540E\uFF0C\u5373\u53EF\u7528\u4E8E\u6309\u7528\u6237\u5C5E\u6027\u63A8\u9001\u7B49\u3002</p><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> attrNames <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
attrNames<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
attrNames<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
attrNames<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;country&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ImSetAttrNameRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImSetAttrNameRequest</span><span class="token punctuation">(</span>attrNames<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ImSetAttrNameResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imSetAttrName</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u83B7\u53D6\u5E94\u7528\u5C5E\u6027\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5E94\u7528\u5C5E\u6027\u540D\u79F0" aria-hidden="true">#</a> \u83B7\u53D6\u5E94\u7528\u5C5E\u6027\u540D\u79F0</h2><p>\u7BA1\u7406\u5458\u83B7\u53D6\u5E94\u7528\u5C5E\u6027\u540D\u79F0\u3002\u4F7F\u7528\u524D\u8BF7\u5148 <a href="#%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E5%B1%9E%E6%80%A7%E5%90%8D%E7%A7%B0">\u8BBE\u7F6E\u5E94\u7528\u5C5E\u6027\u540D\u79F0</a> \u3002</p><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ImGetAttrNameRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImGetAttrNameRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ImGetAttrNameResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imGetAttrName</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u83B7\u53D6\u7528\u6237\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7528\u6237\u5C5E\u6027" aria-hidden="true">#</a> \u83B7\u53D6\u7528\u6237\u5C5E\u6027</h2><p>\u83B7\u53D6\u7528\u6237\u5C5E\u6027\uFF08\u5FC5\u987B\u4EE5\u7BA1\u7406\u5458\u5E10\u53F7\u8C03\u7528\uFF09\uFF1B\u6BCF\u6B21\u6700\u591A\u53EA\u80FD\u83B7\u53D6 100 \u4E2A\u7528\u6237\u7684\u5C5E\u6027\u3002\u4F7F\u7528\u524D\u8BF7\u5148 <a href="#%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E5%B1%9E%E6%80%A7%E5%90%8D%E7%A7%B0">\u8BBE\u7F6E\u5E94\u7528\u5C5E\u6027\u540D\u79F0</a> \u3002</p><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> toAccount <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ImGetAttrRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImGetAttrRequest</span><span class="token punctuation">(</span>toAccount<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ImGetAttrResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imGetAttr</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u8BBE\u7F6E\u7528\u6237\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u7528\u6237\u5C5E\u6027" aria-hidden="true">#</a> \u8BBE\u7F6E\u7528\u6237\u5C5E\u6027</h2><p>\u7BA1\u7406\u5458\u7ED9\u7528\u6237\u8BBE\u7F6E\u5C5E\u6027\u3002\u6BCF\u6B21\u6700\u591A\u53EA\u80FD\u7ED9 100 \u4E2A\u7528\u6237\u8BBE\u7F6E\u5C5E\u6027\u3002\u4F7F\u7528\u524D\u8BF7\u5148 <a href="#%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E5%B1%9E%E6%80%A7%E5%90%8D%E7%A7%B0">\u8BBE\u7F6E\u5E94\u7528\u5C5E\u6027\u540D\u79F0</a> \u3002</p><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> attrs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
attrs<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attr1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
attrs<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;city&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attr2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">UserAttrItem</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserAttrItem</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> attrs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserAttrItem</span><span class="token punctuation">&gt;</span></span> userAttrs <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ImSetAttrRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImSetAttrRequest</span><span class="token punctuation">(</span>userAttrs<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ImSetAttrResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imSetAttr</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u5220\u9664\u7528\u6237\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u7528\u6237\u5C5E\u6027" aria-hidden="true">#</a> \u5220\u9664\u7528\u6237\u5C5E\u6027</h2><p>\u7BA1\u7406\u5458\u7ED9\u7528\u6237\u5220\u9664\u5C5E\u6027\u3002\u6CE8\u610F\u6BCF\u6B21\u6700\u591A\u53EA\u80FD\u7ED9 100 \u4E2A\u7528\u6237\u5220\u9664\u5C5E\u6027\u3002\u4F7F\u7528\u524D\u8BF7\u5148 <a href="#%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E5%B1%9E%E6%80%A7%E5%90%8D%E7%A7%B0">\u8BBE\u7F6E\u5E94\u7528\u5C5E\u6027\u540D\u79F0</a> \u3002</p><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> attrs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
attrs<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attr1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
attrs<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;city&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attr2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">UserAttrItem</span> item <span class="token operator">=</span> <span class="token class-name">UserAttrItem</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">toAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">attrs</span><span class="token punctuation">(</span>attrs<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserAttrItem</span><span class="token punctuation">&gt;</span></span> userAttrs <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ImRemoveAttrRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImRemoveAttrRequest</span><span class="token punctuation">(</span>userAttrs<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ImRemoveAttrResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imRemoveAttr</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u83B7\u53D6\u7528\u6237\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7528\u6237\u6807\u7B7E" aria-hidden="true">#</a> \u83B7\u53D6\u7528\u6237\u6807\u7B7E</h2><p>\u83B7\u53D6\u7528\u6237\u6807\u7B7E\uFF08\u5FC5\u987B\u4EE5\u7BA1\u7406\u5458\u5E10\u53F7\u8C03\u7528\uFF09\u3002\u6BCF\u6B21\u6700\u591A\u53EA\u80FD\u83B7\u53D6 100 \u4E2A\u7528\u6237\u7684\u6807\u7B7E\u3002</p><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> toAccount <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ImGetTagRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImGetTagRequest</span><span class="token punctuation">(</span>toAccount<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ImGetTagResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imGetTag</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u6DFB\u52A0\u7528\u6237\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u7528\u6237\u6807\u7B7E" aria-hidden="true">#</a> \u6DFB\u52A0\u7528\u6237\u6807\u7B7E</h2><p>\u7BA1\u7406\u5458\u7ED9\u7528\u6237\u6DFB\u52A0\u6807\u7B7E\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><ul><li>\u6BCF\u6B21\u8BF7\u6C42\u6700\u591A\u53EA\u80FD\u7ED9 100 \u4E2A\u7528\u6237\u6DFB\u52A0\u6807\u7B7E\uFF0C\u8BF7\u6C42\u4F53\u4E2D\u5355\u4E2A\u7528\u6237\u6DFB\u52A0\u6807\u7B7E\u6570\u6700\u591A\u4E3A 10 \u4E2A\u3002</li><li>\u5355\u4E2A\u7528\u6237\u53EF\u8BBE\u7F6E\u6700\u5927\u6807\u7B7E\u6570\u4E3A 100 \u4E2A\uFF0C\u82E5\u7528\u6237\u5F53\u524D\u6807\u7B7E\u8D85\u8FC7 100\uFF0C\u5219\u6DFB\u52A0\u65B0\u6807\u7B7E\u4E4B\u524D\u8BF7\u5148\u5220\u9664\u65E7\u6807\u7B7E\u3002</li><li>\u5355\u4E2A\u6807\u7B7E\u6700\u5927\u957F\u5EA6\u4E3A 50 \u5B57\u8282\u3002</li></ul></div><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> tags <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">UserTagItem</span> item <span class="token operator">=</span> <span class="token class-name">UserTagItem</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">toAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">tags</span><span class="token punctuation">(</span>tags<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserTagItem</span><span class="token punctuation">&gt;</span></span> userTags <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ImAddTagRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImAddTagRequest</span><span class="token punctuation">(</span>userTags<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ImAddTagResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imAddTag</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u5220\u9664\u7528\u6237\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u7528\u6237\u6807\u7B7E" aria-hidden="true">#</a> \u5220\u9664\u7528\u6237\u6807\u7B7E</h2><p>\u7BA1\u7406\u5458\u7ED9\u7528\u6237\u5220\u9664\u6807\u7B7E\u3002\u6CE8\u610F\u6BCF\u6B21\u6700\u591A\u53EA\u80FD\u7ED9 100 \u4E2A\u7528\u6237\u5220\u9664\u6807\u7B7E\u3002</p><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> tags <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">UserTagItem</span> item <span class="token operator">=</span> <span class="token class-name">UserTagItem</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">toAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">tags</span><span class="token punctuation">(</span>tags<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserTagItem</span><span class="token punctuation">&gt;</span></span> userTags <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ImRemoveTagRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImRemoveTagRequest</span><span class="token punctuation">(</span>userTags<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ImRemoveTagResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imRemoveTag</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u5220\u9664\u6240\u6709\u7528\u6237\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6240\u6709\u7528\u6237\u6807\u7B7E" aria-hidden="true">#</a> \u5220\u9664\u6240\u6709\u7528\u6237\u6807\u7B7E</h2><p>\u7BA1\u7406\u5458\u7ED9\u7528\u6237\u5220\u9664\u6240\u6709\u6807\u7B7E\u3002\u6CE8\u610F\u6BCF\u6B21\u6700\u591A\u53EA\u80FD\u7ED9 100 \u4E2A\u7528\u6237\u5220\u9664\u6240\u6709\u6807\u7B7E\u3002</p><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> toAccount <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ImRemoveAllTagsRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImRemoveAllTagsRequest</span><span class="token punctuation">(</span>toAccount<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ImRemoveAllTagsResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imRemoveAllTags</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,42);function p(e,c){return t}var u=n(a,[["render",p]]);export{u as default};
