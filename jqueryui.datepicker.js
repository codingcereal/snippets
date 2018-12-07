	function loadCalTbl(chnTblObj,chnCalObj,chnDates){
		chnCalObj.datepicker({ 
			beforeShowDay: function(date){
					dmy = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
					if (jQuery.inArray(dmy, chnDates) != -1) {
						return [true, "","Active"];
					} else {
						return [false,"","Inactive"];
					}
				},
			minDate: -30, 
			maxDate: +30,
			dateFormat: 'yy-mm-dd',
			onSelect: function(curDate, instance){
				var tblbody = chnTblObj;
				tblbody.find('tr').hide().removeClass('odd');
				tblbody.find('[data-date="'+curDate+'"]').show();
				tblbody.find('tr:visible:even').addClass('odd');
			}
		});
	}
