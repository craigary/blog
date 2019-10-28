---
layout: mypost
title: Use AutoHotkey To Make Cap Key Great Again
categories: [Lab]
---

Human is wired, we often come up with various interesting thoughts, and hope it could come to reality. Human also different, we have different demands which are not easy to make something that can satisfy all of us. When present situation can't match our requirements, we gotta make our own.

So we got Automator on Mac, Tasker on Android, Workflow on iOS. when it comes to windows, we also got a glass of ice water: Autohotkey (not iTunes XD).

I love when I select serval word on Android, then tap Cap key on Google Gboard, it can transform the word into all caps, all-lowercase, or just let the first letter of each word capitalized. It's not a big deal, but it's convenient. but the excitement didn't last long when I found I can't make this happen on my PC. for me, PC is my priority input tool. so I decide to try AutoHotkey to achieve this.

What I except, is select a word (or some words), then press Caps Lock key to switch the different forms of the word: all caps, all lowercase, or just let the first letter capitalized. but in the PC world, if a single key was set to trigger an action, there can be some conflict happens, so I chose `Win`+`Cap` as the hotkey to trigger the action.

So when I select some word and press `Win`+`Cap`, I want AHK cut the select into the clipboard, transform the clipboard into text format, put the select into a variable `str` and do the judgment. If the select is lower case, then use `StringUpper` transform the text into uppercase. if the selection is all caps, then transform to the news title style: capitalize the first letter of each word. For the rest situation, we put it back to the lowercase.

And finally, AHK paste transformed text to the screen and clean the clipboard. The process can be taken really fast and we can't even see the words disappearing from the screen, it just works.

After checking the documents for a long time I finally finished the script. but when I test it, I found this only works fine when I select the single words. It can't jump to different cases. I checked multiple times to make sure if...else syntax didn't go wrong. then I checked the docs, I found this.

upper: True if Var is empty or contains only uppercase characters. False if there are any digits, spaces, tabs, punctuation, or other non-uppercase characters anywhere in the string.

I use `is upper` and `is lower` to check the words, but when I select multiple words which contain spaces, it doesn't consider it as upper or lower case. I tried to found another but there's no. So finally, I added another variable `str1` before it jumps to judgments, which has the same as the selection but remove all the spaces. I use this variable to judge, but convert the selection in the clipboard.

So there is the final code. Hope you can enjoy it.

    LWin & CapsLock::
    send ^x
    str= %clipboard%
    str1= %clipboard%
    StringReplace , str1, str1, %A_Space%,,All
    if str1 is lower
    {
    clipboard:=StringUpper(str)
    Send ^v
    }
    else if str1 is upper
    {
    clipboard:=StringUpper(str,"T")
    Send ^v
    }
    else
    {
    clipboard:=StringLower(str)
    Send ^v
    }
    clipboard =
    RETURN
    StringLower(ByRef InputVar, T = "")
    {
    StringLower, InputVar, InputVar, %T%
    return InputVar
    }
    StringUpper(ByRef InputVar, T = "")
    {
    StringUpper, InputVar, InputVar, %T%
    return InputVar
    }
