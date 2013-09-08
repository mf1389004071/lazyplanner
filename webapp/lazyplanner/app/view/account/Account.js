/*
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
 */
Ext.define('TodoBrowser.Account', {
    extend: 'Ext.container.Viewport',
    initComponent: function(){
        Ext.apply(this, {
            layout: 'border',
            cls: 'central-region',
            padding: 0,
            items: [
    		        header,
    		        footer,
    		        this.createCenter(),
    		        this.createWest()    		        
    		]
        });
        this.callParent(arguments);
    },

	createCenter: function(){ 
	  this.editorInfo = Ext.create('widget.accountEditor', {
          region: 'center',
          listeners: {
              scope: this,
              projectCreate: this.onProjectCreate
          }
      });
      return this.editorInfo;
	},

    createWest: function(){
        this.accountInfo = Ext.create('widget.accountInfo', {
            region: 'west',
            width: '20%',
            listeners: {
                scope: this,
                workspaceSelect: this.onWorkspaceSelect,
                userSelect: this.onUserSelect,
                newProject: this.onNewProject,
                projectSelect: this.onProjectSelect,
                assignedProjectSelect : this.onAssignedProjectSelect,
                personSelect : this.onPersonSelect,
                passwordSelect :this.onPasswordSelect,
                assignUserSelect :this.onAssignUserSelect,
                settingsHeaderSelect :this.onSettingsHeaderSelect,
                projectsHeaderSelect :this.onProjectsHeaderSelect,
                usersHeaderSelect :this.onUsersHeaderSelect,
                assignedProjectsHeaderSelect :this.onAssignedProjectsHeaderSelect
            }
        });
        return this.accountInfo;
    },

    onStar: function(){
		this.editorInfo.loadStart();
    },
     
    onProjectCreate: function(){
    },
    
    onWorkspaceSelect: function(rec){
    	this.editorInfo.loadWorkspace(rec.data.text);
    },
    
    onNewProject: function(rec){
		this.editorInfo.newProject(rec.data.text);
    },
     
    onProjectSelect: function(rec){
		this.editorInfo.loadProject(rec.raw.dataId, rec.data.text);
    },
     
    onAssignedProjectSelect : function(rec){
		this.editorInfo.loadAssignedProject(rec.raw.dataId, rec.data.text);
    },
    
    onUserSelect: function(rec){
		this.editorInfo.loadUser(rec.raw.dataId, rec.data.text);
    },
    
    onPersonSelect: function(rec){
		this.editorInfo.loadPerson(rec.data.text);
    },
    
    onPasswordSelect: function(rec){
		this.editorInfo.loadPassword(rec.data.text);
    },
    
    onAssignUserSelect: function(rec){
		this.editorInfo.loadAssignUser(rec.data.text);
    },
    
    onSettingsHeaderSelect: function(rec){
		this.editorInfo.loadSettingsHelp(rec.data.text);
    },
    
    onProjectsHeaderSelect: function(rec){
		this.editorInfo.loadProjectsHelp(rec.data.text);
    },
    
    onUsersHeaderSelect: function(rec){
		this.editorInfo.loadUsersHelp(rec.data.text);
    },
    
    onAssignedProjectsHeaderSelect: function(rec){
		this.editorInfo.loadAssignedProjectsHelp(rec.data.text);
    }
});
