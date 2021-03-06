<#--
Copyright (C) Bilgin Ibryam http://www.ofbizian.com

This is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 2.1 of the License, or
(at your option) any later version.

Foobar is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this software.  If not, see http://www.fsf.org
-->
<#if pageName == "start">
<h3>Welcome to Lazy Planner account management page.</h3></br>
<p>Manage your Account details, Personal Profile and password from <b>Settings</b> menu.</p>
<p>From <b>Projects</b> menu, create new Project or see details of your existing projects</p>
<p><b>Users</b> menu allows adding existing Lazy Planner users to this account, so they can be individually assigned to specific projects.</p>
<p>If you are added to another account and assigned to projects, you can see these projects from <b>Assigned Projects</b> menu.</p>
<#elseif pageName == "settings">
<h3>Settings Menu.</h3></br>
<p>Change the company name which appears on top left corner of the application and description for the account.</p>
<p>Profile page allows you to complete personal information such as first, middle and last name. These data appears on each story assigned to you.</p>
<p>You can change your password from with a new from password menu item.</p>
<#elseif pageName == "projects">
<h3>Projects Menu.</h3></br>
<p>If your account allows, you can create a new project by filling the project name and description. Optionally it is possible also to specify a due date for the project.
Note that all these information is only informative. Once a project i created/add, it can be selected from top right corner in order to start working on it.</p>
<#elseif pageName == "users">
<h3>Users Menu.</h3></br>
<p>Add New User menu allows you to add registered users. This only makes users available on the menu, so you can select them and assign to specific projects. Once assigned to a project, the user can access the project and work on it</p>
<#elseif pageName == "assignedProjects">
<h3>Assigned Projects Menu.</h3></br>
<p>If you are assigned to a project by another user, then you can see the assigned projects listed here.</p>
<#else>
No page selected.
</#if>