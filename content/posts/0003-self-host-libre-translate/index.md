{
  "title": "Self Host Libre Translate",
  "publishDate": "2026-11-07T06:30:00-03:00",
  "categories": ["posts"]
}

After the entire night "programming", let me share something with you :D

**Everything I'm about to say is local, offline, free, forever!**

No ads, no subscriptions, no payments, no tokens, no cloud, no external APIs, nothing!

Your data stays in your own infrastructure, nothing gets out, everything stays private.

![I made this icon myself, in a cave, with a box of scraps!](auto-translate.webp)

<!--more-->

Can you believe that you can have **THE ENTIRE WIKIPEDIA** offline on your PC right now?!?

Seriously, I'm not joking, check this out: https://browse.library.kiwix.org/?lang=eng&q=wikipedia

Crazy right?!?

Now, the downside is that Wikipedia isn't equally complete in every language, therefore we need an offline translator for that!

Nowadays browsers already do a pretty good job at translating pages, but I found my balance in https://libretranslate.com/

A lightweight (you can even run it on a RPi!), self-hosted translator where you can centralize all your language models in one place. No need to download translation packages on every device you own, and the translation speed is smooth regardless of your device's processing power.

But there is one problem.

All the Firefox extensions I tested were missing something.

Sometimes it was how they translated the pages, sometimes the setup was unnecessarily complicated, and sometimes it was something as simple as **printing the page**.

That's why me and my chatbot spent the entire night building an extension that:

- Supports all the language models you've installed on your LibreTranslate server.
- Translate entire webpages directly, without changing the original layout or URL.
- Keep translation enabled while navigating between pages in the same tab.
- If you navigate to a website in another language in the same tab, it automatically detects the language and translates it into yours.
- Translate dynamically loaded content, including those annoying websites that keep loading stuff as you scroll.
- Select any text, right-click, and translate it into the page's language or a custom language of your choice.
- Automatically detect languages and use your browser's preferred language.
- After the translation finishes, you can print the translated page without reloading it.
- Cache translations locally to avoid translating the same content over and over.

I'm publishing the add-ons, meanwhile you can try the development version on my github:

https://github.com/ribas89/self-host-libre-translate/releases/tag/1.6.1

For now, it only works with self-hosted LibreTranslate instances, but tomorrow I'll add API key integration for those who prefer using a hosted service.

Maybe I'll do a follow-up when it's published on Firefox. Maybe I won't. Who knows?!? I don't xD

Have a nice weekend! o/