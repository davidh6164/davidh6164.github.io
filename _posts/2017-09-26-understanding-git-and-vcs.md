---
layout: post
title:  "Understanding Git & VCS"
date:   2017-09-26 23:35:25 -0600
categories: September
---


#### Published September 26, 2017 by David Horn


## Contents
* What are Version Control Systems?
* Why use Git?
* Setting up Git
* Basics of Git
* Initialize Repository
* Checkout Repository
* Git Workflow
* Git Branching
* Commit Changes
* Push Commits
* Merge Branches
* Pull Requests
* Introducing Github

****


## What are Version Control Systems(VCS)?
Version control systems(VCS) focus on tracking changes that happen within directories to files. They keep track of every modification to a file and save earlier versions which a developer can restore in order to help fix a mistake and minimize disruption amongst team mates. Version control systems also allow developers to update and make changes faster while avoiding mistakes. There are many programs for VCS such as Subversion, Perforce, Mercurial, Fossil, and Git. The focus of this article is on Git, but some generalities can be made about most VCS. 

****

## Why choose Git over any other VCS?
Why should you use Git? Git is the most popular Version control system used today. Git differs from some of the other VCS tools because it is a distributed version control system, meaning your local copy of the code files is a complete copy of the repository. Having the entire repository allows developers to work offline and remotely. Once changes are made offline, a developer would try to sync their copy of code to the repository. Other VCS use a centralized version control system where clients must sync code with a server before creating newer versions of code, which requires an internet connection. 

****

## Setting up Git
You can download and install Git for Linux, Windows, and Mac.

#### For Linux Users:
Debian OS: 
{% highlight bash linenos %}
   sudo apt-get install git
{% endhighlight %}

#### For Windows & Mac Users:
Download the executable setup file from the official Git website and then run to install Git to your PC. 

#### Account Setup
You are going to want to set up your account for Git and this will only have to be done once. 
For All Users:

{% highlight bash linenos %}
   Git config --global user.name “firstName lastName”
   Git config --global user.email email@address.com
   Git config --list 
{% endhighlight %}

Git is now setup!

****

## Basics of Git
In this section, I will cover most of the basic commands that you will need to use Git successfully. By the end, you should be able to successfully setup Git, initialize a repository, start and stop tracking files, undo mistakes quickly, push and pull from remote repositories, and browse a project’s history to view changes between commits. 

****

## Initialize a Repository
A git repository is a folder containing previous and current versions of files within. Initializing a repository in Git is the similar to creating a new project folder.
You should have an empty folder dedicated to all of your git projects. This directory will house all of your git repositories over time. Navigate to this folder in the terminal then run this command to initialize a new git repository:

{% highlight bash linenos %}
   Git init PROJECT_NAME
   cd PROJECT_NAME/
{% endhighlight %}


This command creates a new subdirectory titled .git that will track all of the necessary repository files. 

****

## Clone a Repository
When you checkout a repository you are making a working copy of an existing repository. This is useful if you will be working on a project you did not start. 

{% highlight bash linenos %}
   Git clone /path/to/repository 
{% endhighlight %}

****


## Git Workflow
A local repository consists of three phases or trees maintained by Git. The Working Directory is the first phase, this holds the actual files. The second one is the Index which acts like a staging area before commits are made. The third and final one is the Head which is the last commit you had made. 
When you wish to propose changes to a repository, you can add it to the Index (stage) using the add command. 

{% highlight bash linenos %}
   Git add PATH_TO_FILE/FILE_NAME will add a particular file.
   Git add . will add everything.
{% endhighlight %}

After each add command you can check the status of the staged files by using the status command.
Git status

****

## Commit Changes
This is the first step in the basic Git workflow. You will commit these changes by using the commit command. A commit is like a version of all your modified files. Files can be in one of three states: modified, staged, or committed. As you modify files, these changes will only exist in your local directory until you commit these changes. Before you commit files, you must stage the changed files. Staging files allows you to omit certain files that you would want to commit separately. When you commit files separately, it can become easier to review your development history. This staging area will contain all changes that you want to include in your commit. Commit these files with a message describing your changes and then your commit becomes a part of your development history. Use the development history to revert to previous versions of your code or review when and where changes were made. Use the commit command along with -m to include a short message with your commit which will be beneficial when reviewing your development history. 

{% highlight bash linenos %}
   Git commit -m ”Your Commit Message”
{% endhighlight %}

Now the file is committed to the Head, to send these changes to your remote repository you will need to use the push command. 

****

## Push Commits
{% highlight bash linenos %}
   Git push origin BRANCH_NAME
   Git push origin master 
{% endhighlight %}

The master command is used to push changes to the master branch of your repository. 

****

## Git Branching
Branches are used to develop features for a project. Branching allows these features to be developed separately from one another in an isolated version. Use branching to develop and merge features isolated from one another to minimize mistakes, then merge these changes into the master branch. The master branch is considered the default branch when you first create a repository.

****

## Checkout Branches
When you checkout a branch you are switching from one to another:

{% highlight bash linenos %}
   Git checkout BRANCH_NAME
{% endhighlight %}

Branch Policies: You can set up branch policies to set various requirements for pull requests to meet. When you use branch policies, you can protect more important branches of your code by preventing direct pushes by requiring review.

****

## Merge Branches
You can merge a different branch to your current branch by using the merge command. 

{% highlight bash linenos %}
   Git merge BRANCH_NAME
{% endhighlight %}

****

## Pull Requests
Use pull requests to discuss the code changes with your team before merging the changes to your master branch. You can also write quick notes to briefly describe the changes you made to the code.
Pull changes from the remote repository to your local repository using the pull command.

{% highlight bash linenos %}
   Git pull
{% endhighlight %}

****

## Introducing Github
Github is a hosting service for Git repositories which allows you to easily share projects with your team. You can create an account for free, but it takes a subscription fee to keep your projects hidden from the public. Github also offers a nice user interface which allows you to use Git without having to use a terminal and its commands. 

****

### More Blog Posts
[Reducing HTTP Requests]({% post_url 2017-05-27-reducing-http-requests %})

[Effective Kanban for Web Design]({% post_url 2017-08-29-kanban-for-web-design %})

[Chrome DevTools 101]({% post_url 2017-07-25-chrome-devtools-101 %})


