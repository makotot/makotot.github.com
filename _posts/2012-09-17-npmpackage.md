---
layout: post
---

## node moduleの作り方

{% highlight bash %}
$ ls
README.md  hoge.js  package.json  sample
{% endhighlight %}

edit package.json.
{% highlight json %}
{
	"name": "hoge",
	"version": "0.0.1",
	"description": "",
	"preferGlobal": "true",
	"bin": { "hoge": "hoge.js" },
	"author": "makotot",
	"engine": { "node": "*" }
}
{% endhighlight %}

npm link command.
{% highlight bash %}
$ npm link
{% endhighlight %}

### 参考リンク
[Create NPM Package - Node.js Module](http://www.hacksparrow.com/create-npm-package-node-js-module.html)
