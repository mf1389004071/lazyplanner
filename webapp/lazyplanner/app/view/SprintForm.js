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
Ext.define('TodoBrowser.SprintForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.sprintForm',
    cls: 'preview',
    border: false,
    bodyStyle: 'padding:10px',
    layoutConfig: {
        animate: true,
        activeOnTop: false
    },
    title: 'Task List Details',
    id : 'sprintForm',
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },
    items: [{
            xtype: 'container',
            anchor: '100%',
            layout:'column',
            items:[{
                xtype: 'container',
                columnWidth:1,
                layout: 'anchor',
                items: [{
                    xtype:'textfield',
                    fieldLabel: 'Title*',
                    emptyText: 'Short title for this list',
                    allowBlank: false,
                    name: 'workEffortName',
                    anchor:'96%%'
                }]
            },{
                xtype: 'container',
                //columnWidth:.2,
                width: 90,
                layout: 'anchor',
                items: [{
                    xtype: 'datefield',
                    format : 'Y-m-d',
                    fieldLabel: 'Due Date',
                    name: 'estimatedCompletionDate',
                    anchor:'100%%'
                }]
            }]
        }, {
        xtype: 'htmleditor',
        name: 'description',
        fieldLabel: 'Description',
        height: 130,
        anchor: '100%'
    }],
    
    initComponent: function(){
	   Ext.apply(this, {
		   url : createSprint,
		   buttons: [{
            text: 'Save',
            scope: this,
            handler: function() { 
            	Ext.getCmp('sprintForm').getForm().submit({
            		clientValidation: true,
            		url: this.url,
                    waitMsg: 'Submitting your data...',
            	    params:this.extraParams,            		
        		    success: function(form, action){
        			    form.reset();
         		    	showMessage("Task List added successfully");
         		    	Ext.getCmp('sprintForm').onSprintCreate(action.result.workEffort);
        		   },
        		   failure: function(form, action){
       		    		extractAndShowError(action);
        		   }
        		});
            }
        },{
            text: 'Cancel',
        	handler: function(){
        		Ext.getCmp('sprintForm').getForm().reset();
      	   }
        }],
      });
	    this.callParent(arguments);
      },
      
      createSprint: function() { 
		  this.url = createSprint;
		  this.extraParams = {};
		  this.getForm().reset();
	  },
    
      loadSprint: function(workEffortId) { 
		this.url = updateSprint;
    	this.extraParams = {workEffortId : workEffortId};

        var sprintDetailed = Ext.ModelManager.getModel('TodoBrowser.SprintDetailed');
        sprintDetailed.load(workEffortId, {
            scope: this,
            failure: function(record, operation) {
  		    	showError("Error loading task list.");
            },
            success: function(record, operation) {
                this.getForm().loadRecord(record);
            },
            callback: function(record, operation) {
            }
        });
    },
    
    onSprintCreate: function(workEffort) {
        this.fireEvent('sprintCreate', workEffort);
    }
});
