jQuery(function(){
 
	jQuery('.personalization-preview').flash(
		{   
			// test.swf is the flash document   
			swf: 'personalized-message.swf',
			expressInstaller: '/engraving/expressInstall.swf',
			flashvars:{
				flashMessage: 'Personalized Message',
				flashMessage2: 'Personalized Message'
			},
			height: 36,
			width: 325 
		}   
	);  

	jQuery('.personalized-message').bind("change keyup", function(){
		var messageText = jQuery(this).val();
		jQuery('.personalization-preview').flash(function(){
				this.SetVariable('/:flashMessage', messageText);
				this.SetVariable('/:flashMessage2', messageText)
			});

	});

});

