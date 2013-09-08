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
Ext.define('TodoBrowser.CommentGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.commentGrid',
    border: false,
    layout : 'fit',
    initComponent: function(){
        this.createStore();
        Ext.apply(this, {
            cls: 'comment-grid',
            store: this.store,
            columns: [{
                text: 'Comment',
                dataIndex: 'noteInfo',
                renderer: this.formatComment,
                flex: 4
            }, {
                text: 'Date',
                dataIndex: 'noteDateTime',
                renderer: this.formatCreationDate,
                flex: 1
            }]
        });
        this.callParent(arguments);
    },
    
    createStore : function() {
    	this.store = Ext.create('Ext.data.Store', {
            model: 'TodoBrowser.CommentGrid',
            autoLoad: false,
            sorters: [{
                property : 'noteDateTime',
                direction: 'ASC'
		    }       
           ] ,
		    listeners: {
	            load: this.onLoad,
	            scope: this
	        }
        });
    	return this.store;
	},

    onLoad : function(store, records, successful,  eOpts ) {
    	if (!successful) {
    		showError("Error loading comments. Please sign in again.");
    	}
    	//this.ownerCt.doLayout();
    	//Ext.getCmp('storyContainer').doLayout();
    },
       
    load: function(workEffortId){
    	this.store.getProxy().extraParams.workEffortId = workEffortId;
        this.store.load();
    },

    formatComment: function(value, p, record){
    	return Ext.String.format('<div class="grid-comment-cell grid-comment-icon">{0}</div>', value);
    },
    
    formatCreationDate: function(value, p, record){
        var creator = projectPartyStore.getById(record.get('noteParty')).get("name");
        var date = Ext.Date.format(value, displayDateForm);
    	//return Ext.String.format('<div class="grid-double-cell"><b>{0}</b><span>by: {1}</span></div>', date, creator);
    	return Ext.String.format('<div class="grid-double-cell"><span class="first-row">{0}</span><span class="subtitle">by: {1}</span></div>', date, creator);
    }
});
