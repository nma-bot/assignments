# Week 1: Intro to Course & Front-end Tools

In this course, we'll be focusing on intermediate-to-advanced front-end web development techniques and best practices. We'll be introducing the following tools and concepts:

### Tools
- _**Git & GitHub**_ for version control & collaboration
- _**Atom**_ for text editing with built-in Git integration
- _**Prepros**_ for CSS compiling and build processing
- _**Chrome DevTools**_ for advanced CSS/JavaScript debugging

### Concepts
- **Responsive web design** (cross-device)
- **CSS authoring** (preprocessors)
- **CSS architecture/frameworks** (DRY/SMACSS)
- **HTML prototyping** (usability testing)
- **JavaScript** (interactive programming)

The goal for this course is for each student to have a basic grasp of the tooling, yet a thorough understanding of the concepts as presented and their necessity in the web design & development process.

You'll also notice a few over-arching themes being repeated throughout the course that, while not core to curriculum, will provide a better understanding of how the development process works at large.

#### Themes
- **Marketing vs product design** (website vs web-app)
- **Craftsmanship** (hacking)
- **Agile development**
- **Open-source software**
- **Contribution/Attribution** (on the web)

Let's get started by introducing the foundational concept that will help us track and share our code, **version control**.

## Version Control

**Version control** (also known as **source control management**) is a system that records changes to a file or set of files over time so that you can recall specific versions later. Many popular systems include aspects of version control built-in to the software like word processors (ie. Google Docs, etc) and content management systems (ie. WordPress, etc).

- [Wikipedia: Revision Control](https://en.wikipedia.org/wiki/Revision_control)
- [Git SCM: Getting started - about version control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)


There's multiple types of version control systems available, including [CVS](http://www.nongnu.org/cvs/), [SVN](http://subversion.apache.org/), [Git](https://git-scm.com/) et al. Each system is catered to a specific type of workflow for collaboration, but generally all provide the same file versioning/history capabilities.

- [Wikipedia: List of types of version control](https://en.wikipedia.org/wiki/List_of_revision_control_software)

**Video: [Git Basics: What is Version Control?](https://vimeo.com/41027679)**
[![What is Version Control](images/git/what-is-version-control.png)](https://vimeo.com/41027679)

### What is Git/GitHub?
[![Git SCM Logo](images/git/git-logo.png)](https://git-scm.com/)

**[Git](https://git-scm.com/) is the fastest growing and most popular version control system used to track and share documents today.**

Git provides common version control capabilities, but with it's own, unique organizational workflow. Git's [branching model concept](#branch) encourages a *feature-based workflow*, allowing people to seamlessly switch back and forth between different features they're working on and experiment without impacting the integrity of their code-base.

Git also allows groups of people to work on the same documents (often code) at the same time, and without stepping on each other's toes. It's a distributed, version control system.

[![Github](images/git/github-logo.png)](https://github.com/)

**[GitHub](https://github.com/) is a web-based, Git repository hosting service. _(ie. a 'hub' for Git repo's, get it?)_**

Unlike Git, which is strictly a command-line (CLI) tool, GitHub provides a web-based graphical interface and desktop client for managing Git repositories.

GitHub also provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.

### Git concepts
- [Git: The advantages of Git compared to other source control systems](https://git-scm.com/about/)
- [Git: Getting started - Git basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

#### Repository
A Git repository is nothing more than a directory (ie. folder) on a computer. Any file in your 'repo' will be tracked and a history of the changes will be recorded (unless [explicitly ignored](http://git-scm.com/docs/gitignore), which we'll talk about a bit later).

#### Branch
A Git branch is a working copy of your code, *in a specific state*. When you're working on a project, you're going to have a bunch of different features or ideas in progress at any given time – some of which are ready to go, and others which are not. Branching exists to help you manage this workflow.

#### Commit
A commit saves your current changes to your current branch. Once you start making changes in a repository, Git will start tracking those changes. Whenever you add, edit, or delete a file, you're making a commit, and adding them to your branch. This process of adding commits keeps track of your progress as you work on a feature branch.

#### Push/Pull (Sync)
A good practice in web development is to create backups of your projects. This is where _**GitHub**_ comes in, as a central repository hosting service for Git projects. Once you've wrapped up with your coding session, it's a good idea to sync your local repository with GitHub so all of your code changes are archived. If you're working on a team or between multiple machines, it's also a good idea to sync your local repository before you start working as well.

#### Pull Request
In the *[GitHub development workflow](#github-development-workflow)*, theres a `master` branch that keeps the final record of the code ready for deployment. To get code from our feature branches in to our master branch, we need to make a pull request.

#### Merge
In Git, merging brings the changes in two branches together. A pull request is a request to merge a set of commits from one branch in to another. Merges can be performed on your local machine to combine changes from two feature branches before syncing, and making a pull request to the `master` branch on Github.

### GitHub setup

1. Sign up for a [free GitHub account](https://github.com/join)
  - Setup [Two Factor Authentication (2FA)](https://github.com/blog/1614-two-factor-authentication) as an additional security measure
2. Complete [ART258 GitHub account form](http://goo.gl/forms/QubL6AJy0F)
3. *Download [GitHub Desktop app](https://desktop.github.com/)
  - [GitHub for Mac](https://central.github.com/mac/latest)
  - [GitHub for PC](https://github-windows.s3.amazonaws.com/GitHubSetup.exe)

**The GitHub Desktop app should already be installed on the KOA 103 studio classroom computers.*

### GitHub development workflow

As we go through the semester, we'll cover different aspects of Git & GitHub within our workflow. At a [high-level](https://en.wikipedia.org/wiki/High-_and_low-level), we'll be following the [GitHub-Flow]() methodology for development with some slight adjustments for this course.

- Anything in the `master` branch is deployable
- To work on something new, create a descriptively named branch off of `master` (ie: `home-page-bug-fix`)
- Commit to that branch locally and regularly push (ie. sync) your work to the same named branch on GitHub
- When you need feedback or help, create an issue and mention myself and/or another student using the @username syntax (ie, @micjamking)
- When you are ready to submit your code assignment, create a pull request:
  - Have 2 other students review your work by mentioning them using the @username syntax in your pull request description (not the title!)
  - If your classmates find any issues, make the fixes locally and push the changes to the same remote branch
  - Once your code has been reviewed by 2 classmates and your code is ready to turn in, create a new comment on your pull request with the words `@micjamking: Final Submission`; this will send me a notification that your assignment is ready to be graded.

## Atom text editor
[![Atom Logo](images/atom/atom-logo.png)](https://atom.io/)

**[Atom](https://atom.io/) is a "hackable text editor for the 21st century".** Similar to *[Adobe Dreamweaver](http://www.adobe.com/products/dreamweaver.html)*, *[Brackets](http://brackets.io/)*, *[Sublime Text](http://www.sublimetext.com/)*, and *[Textmate](https://macromates.com/) (for OSX)*, Atom is a standalone text editor built for coding/programming. However, unlike the above editors, Atom comes with [built-in Git integration](https://atom.io/docs/v1.0.7/using-atom-version-control-in-atom), is [completely customizable](https://atom.io/docs/v1.0.7/hacking-atom-tools-of-the-trade) through JavaScript & CSS, and best of all, is [open-source](http://blog.atom.io/2014/05/06/atom-is-now-open-source.html) (ie. free).

**Video: [GitHub presents: Atom 1.0](https://youtu.be/Y7aEiVwBAdk)**
[![Atom](images/atom/atom.png)](https://youtu.be/Y7aEiVwBAdk)

As a web developer, a text editor is your primary tool for crafting sites and apps, so finding an editor that you're comfortable with and is configurable to match your workflow is important.

Below are a few features which are important to have in a text editor.
- Autocompletion
- File browser/file search
- Extensibility/plugins for additional functionality
- Theming

Along with the above features, Atom also includes [integration with Git](https://atom.io/docs/v1.0.7/using-atom-version-control-in-atom), providing the following additional capabilities:
- Quickly rewind to a previous commit (`cmd-alt-z`)
- Display the list of all the untracked (ie. new) and modified files in the project (`cmd-shift-b`)
- Edit commit messages (if using Git CLI)
- Highlight the status of our untracked and modified files within the tree-view, gutter and status bar of the Atom interface.  

Students may use any text editor they prefer for this course, however Atom will assist in learning the Git concepts and can be configured to fit any particular workflow. It is recommended to atleast try the editor for the initial few weeks, since it will be used for presenting the exercises and should be easier to follow along with.

## Prepros
[![Prepros Logo](images/prepros/prepros-logo.png)](https://prepros.io/)

One of the bigger concepts of the semester will be  authoring CSS using [Sass](http://sass-lang.com/). Sass (Syntactically Awesome Stylesheets) is a scripting language that preprocesses (ie. compiles in to) CSS. Sass extends CSS, providing features that are not yet available like variables, nesting of rules, mixins/functions, and operators to simplify our styling process and make our code more modular, scalable, and maintainable.

- [Wikipedia: Sass](https://en.wikipedia.org/wiki/Sass_(stylesheet_language))

Since browsers only read CSS in its original syntax, we need to use a program to compile our written Sass in to CSS so be served up to the browser. Similar to Git and other front-end tools, Sass was built as a command-line utility. In this course, we'll be using **[Prepros](https://prepros.io/)**, a third-party graphical user-interface (GUI) for CSS preprocessing, to assist us.

Along with Sass compiling, Prepros will also help out in other aspects of our web development build cycle, including:

- CSS prefixing
- Browser refresh & behavior synchronization
- File concatenation & minification
- Image optimization
- FTP client

We'll be diving in to this tool starting Week 2 and will cover each of the features above in detail in the subsequent weeks.

## Chrome DevTools

## HTML/CSS Review