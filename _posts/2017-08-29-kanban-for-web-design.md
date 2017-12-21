---
layout: post
title:  "Effective Kanban for Web Design"
date:   2017-08-29 23:35:25 -0600
categories: August
---


#### Contents
* Kanban for Web Design
* Creating a Kanban
* Create & Track Cards
* Using Trello for Kanbans
* Paws for Trello


****

## Introduction
Kanban is a set of principles and techniques used to organize production tasks in an efficient manner. [Toyota contributed to Kanban’s popularity by adopting Kanban with the intent to maximize their efficiency in assembling cars](https://www.atlassian.com/agile/kanban). This practice was later adopted by other companies in other industries as well. There are different options to organizing and utilizing your kanban, but a traditional waterfall organization is my preferred method. You can write out your kanban on a wall with sticky notes, on a dry erase board, or using software such as Trello.

Note: If you have tried Trello and are not a fan, or wish to try out other Kanban software then you can check out [JIRA](https://www.atlassian.com/software/jira) and [Asana](https://asana.com). 

****

## Why use Kanban in Web Design?
Kanban complements a Web Designer’s workflow by streamlining and organizing tasks. Kanban’s structure makes it easy to track and progress tasks to completion in an efficient manner. Setting a limit on the number of tasks that can be handled forces workers to accomplish tasks to completion before starting a new task. Also, the widespread availability of Kanban software paired with the ability to integrate it with other software such as Github and Slack make Kanbans worth looking into.

****

## Creating a Kanban
It is very simple to structure your own Kanban on a whiteboard or you can get started by opening a new project in Trello. You will see your Kanban board is blank if you just created a new project. You can get started by structuring your Kanban. Kanbans are structured byt dividing the board into three vertical sections: Open tasks, Pending tasks, and Completed tasks. Open tasks is also known as New tasks or Backlog. Each section houses individual tasks that either need to be started, are in progress, or are completed. Dividing the board into sections makes the board easier to read, especially if a lot of tasks pinned to the board. It is important to set a limit on the number of tasks that can live within a particular column or section this is part of Kanban’s strength. This limit is commonly referred to as a WIP Limit or Work-in-Progress Limit. This creates a visual bottleneck that will keep work flowing efficiently, forcing workers to finish the tasks that are pending or have already been started but are not completed. It is commonplace to put a WIP Limit on the Pending Tasks section because it forces current, ongoing tasks to be completed before a new task from the Backlog can be picked up. 

![Trello Kanban]({{"../assets/trello-kanban.png" | relative_url}}){:class="post-md-2"}
<div class="text-center blog-caption">
online Kanban tool Trello
</div>

****

## Create & Track Cards for Tasks
Create cards by adding tasks to the Backlog or Open tasks section. These tasks can be listed by prioritization or otherwise. Once tasks are added to the Backlog, then people can begin working on the tasks that have been written. When someone starts working on a task, they move the task from the Backlog to the Pending tasks section of the Kanban board. 

The Pending Tasks section means that the task has been picked up by a worker and is in progress of being completed. It can be a single row and single column or grow to become more complex. Different rows and columns within the Pending Tasks section could signify different levels of priorities or different features or aspects of the website building process. When additional rows or columns are added to one section of the Kanban they are called  Swim Lanes. A common reason for having additional rows or columns is differentiating from different phases in website production such as: Developing, Finished, Customer Acceptance, and Live. 

****

## Using Trello for Kanban

![Trello Menu]({{"../assets/trello-menu.jpeg" | relative_url}}){:class="post-md-1"}
<div class="text-center blog-caption">
Trello's Menu
</div>

### Add Labels & Comments to Trello Cards
Each Trello card has settings in which all members of a Kanban can add labels to illustrate the level of priority and add comments to provide additional updates and information for every task. Labels in Trello are called Filters and there are many color options to choose from. 

### Integrate Trello with Github
Trello integrates well with Github which means that you can track pull requests and the status of commits along with any comments and additional information provided from the linked Github repository. 

Start by attaching a Pull Request to a Trello card. This can be accomplished by enabling the Github power-up under the menu. Once the power-up is enabled in Trello you can then go under a Trello card’s settings and attach a Github branch or repository to a Trello card and all of its relevant information such as comments, labels, the Pull Request author, whether it was merged will all appear.

Now Trello cards can be quickly identified for not having passed certain checks and are ultimately not completed or ready to launch. A commit may have some errors which may be overlooked until it becomes ready to launch. This feature makes these errors more visible.

![Trello & Github Integration]({{"../assets/trello-github-integration.png" | relative_url}}){:class="post-md-2"}
<div class="text-center blog-caption">
Trello & Github Integration
</div>

### More Trello Features
Using Trello you can track the Kanban Activity Log, Add Members to your Kanban, and Add Comments to Trello Cards.
When you open the Menu for a Trello Kanban project you will see options to add members, add comments, share the board, and read board activities that are divided by user. All board activities are time stamped as well.

****

## Paws for Trello 
Paws for Trello is a third-party desktop client that allows you to use [Trello offline](http://friendlyfox.es/pawsfortrello/). Remember since its not made by Trello you'll have to direct your questions if you have any to the link above. 

****

## Conclusion
Kanban complements a Web Designer’s workflow by streamlining and organizing tasks.This is because Kanban’s structure makes it easy to track and progress tasks to completion in an efficient manner. Simply setting a limit on the number of tasks that can be handled forces workers to accomplish tasks to completion before starting a new task which helps make Kanban work. Also, the widespread availability of Kanban software paired with the ability to integrate it with other software such as Github and Slack make Kanbans worth looking into. Do not forget that Kanbans can be built to meet the needs of specific teams or the needs of the entire team. Your Kanban board should match your own team’s process. If you draw on Kanban’s strengths then your team should be able to accomplish tasks more effectively. 


