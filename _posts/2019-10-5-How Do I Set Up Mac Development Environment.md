---
layout: mypost
title: How Do I Set Up Mac Development Environment
---

Ever since I switch my main computer from a 3-year-old Dell laptop to MacBook pro, I am impressed by the build quality, design, operating system, and battery life. Everything starts from the first MacBook Pro I got during my internship, then I grabbed a 13 inch MacBook pro 2015 early version.

TBH I am not that picky when choosing an operating system, no matter windows 10, macOS, or even Linux distros, but MacOS provide an excellent design, a decent command key, stability, and consistency. 

Here is my MacBook Pro set up, I wrote this as a backup for the next time if I need to do this again, also is nice to share for those who need to set up their Mac for development propose.

# Make sure the connection to Google is fine.

Because I am in mainland China, a good connection to the *outside world* is necessary.

# Change some Settings Preference

- Add Internet Accounts: Gmail, Outlook, Personal Mail, etc.

- General -> uncheck “Use font smoothing when available”, which is recommend for retina displays. 

- Accessibility -> Pointer Control -> Trackpad Options, check ”Enable dragging”, “three finger drag”.

- Accessibility -> Siri, check “Enable Type to Siri”.

- Keyboard -> Shortcuts -> Spotlight, ~~uncheck “Show Spotlight search”, use Alfred Instead,~~ then check use keyboard navigation to move focus between controls. 

- Also, add other input sources if needed.

- Remove Siri in the menu bar.

- Security & Privacy -> Privacy, unlock the padlock, then click Details under Location section, uncheck “Location-Based Suggestions”, I do this only because Spotlight / Siri suggestions are not available in China, this is a workaround.

- Dock, uncheck “Show recent applications in Dock”, check Auto hide / show Dock.

- Go to Software Update, check all options so that you can keep everything updated to the latest version.

# Install Fonts

Install FiraCode, DIN, Cascadia Code, Inter Fonts.

# Config Git

```shell
git config --global user.name "Craig Hart"
git config --global user.email "i@craigary.net"
```

# Homebrew and other necessary programs

Run this command to install homebrew

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install applications:

```bash
brew cask install iina 1password spotify fork iterm2 visual-studio-code textmate typora figma telegram alfred AppCleaner notion Minecraft google-backup-and-sync android-platform-tools
```

Install rest programs w/ MAS or download from its official website

- Google Chrome beta
- Setapp
  - BetterZip
  - Bartender
  - One Switch
  - Boom 3D
  - Unclutter
- Mac App Store
  - Magnet
  - Todoist
  - Maipo
  - Keynote
  - Pages
  - Numbers
  - QQ
  - WeChat

Install other packages:

```shell
brew install neofetch node scrcpy
```

# Setup the terminal - iTerm2

- Color Scheme: [Nord](https://github.com/arcticicestudio/nord-iterm2), theme: minimal, font: Fira Code
- Install Oh-My-Zsh

```shell
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

- Install Starship for the better terminal prompt: 

```shell
brew install starship
echo 'eval "$(starship init zsh)"' >> ~/.zshrc
```

- Install zsh-autosuggestions for better history suggestions
  
```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

- Install zsh-syntax-highlighting for color highlighting

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

- enable these two plugins above: 

```
# edit ~/.zshrc file
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

# Install Yarn and config Node environment

- Install Yarn

```shell
curl -o- -L https://yarnpkg.com/install.sh | bash
```

- Config to Taobao Registry

```shell
yarn config set registry https://registry.npm.taobao.org -g
yarn config set disturl https://npm.taobao.org/dist -g
yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/ -g
yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ -g
yarn config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/ -g
yarn config set chromedriver_cdnurl https://cdn.npm.taobao.org/dist/chromedriver -g
yarn config set operadriver_cdnurl https://cdn.npm.taobao.org/dist/operadriver -g
yarn config set fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents -g
```
- Install Vue Cli

```shell
yarn global add @vue/cli
```

- Install gitmoji

```
npm i -g gitmoji-cli
```

# Import SSH Keys

- copy the ssh keys to `~/.ssh` folder

- Fix the permissions:

```shell
chmod 600 ~/.ssh/*
```

# Config VS Code

- Add to path
- Install Plugins:
  - JavaScript (ES6) code snippets
  - Live Server
  - Nord
  - Prettier
  - Vetur
  - Vue 2 snippets
- Config  preferences:

```json
{
    "editor.fontSize": 14,
    "debug.console.fontSize": 14,
    "terminal.integrated.fontSize": 14,
    "files.autoSave": "onFocusChange",
    "editor.wordWrap": "on",
    "editor.fontLigatures": true,
    "git.enableSmartCommit": true
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.tabSize": 2,
    "git.autofetch": true,
    "editor.fontFamily": "'Cascadia Code', Consolas, 'Courier New', monospace",
    "terminal.integrated.fontFamily": "'Fira Code', monospace",
    "workbench.colorTheme": "Nord",
    "workbench.iconTheme": "vscode-icons",
    "window.zoomLevel": 0,
}
```

# Now you're ready to go!

Only things left are no that import like setting up 1Password, login telegram, etc.

For my past experience, the whole process is not as compelicated as what you saw above, actually the whole set up can be done with in 1 hour, which is much faster than setting things up on a Windows machine since it doesn't has a decent package manager (I never try chocolatey, sorry). 