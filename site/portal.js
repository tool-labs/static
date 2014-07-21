/*global ZeroClipboard */

$(function () {
	$('#resources').on('click', '.resource', function (e) {
		var $el = $(this),
			// Promote protocol-relative urls
			url = this.href.replace(/^https?:/, ''),
			filename = $(this).text(),
			snippet;

		if (url.slice(-4) === '.css') {
			snippet = '<link rel="stylesheet" href="' + url + '">';
		} else if (url.slice(-3) === '.js') {
			snippet = '<script src="' + url + '">';
		} else {
			return;
		}

		$('#resource-modal')
			.find('.resource-modal-label')
				.text(filename)
				.end()
			.find('.resource-modal-snippet')
				.text(snippet)
				.end()
			.find('.resource-view, .resource-download')
				.attr('href', url)
				.end()
			.find('.resource-download')
				.attr('download', filename)
				.end()
			.find('.btn-clipboard')
				.data('clipboard-value', snippet)
				.data('placement', 'top')
				.attr('title', 'Copy to clipboard')
				.tooltip({
					container: 'body'
				})
				.end()
			.modal();

		e.preventDefault();
	});

	ZeroClipboard.config({
		swfPath: './res/zeroclipboard/2.1.5/ZeroClipboard.swf',
		hoverClass: 'btn-clipboard-hover'
	});

	var client = new ZeroClipboard($('.btn-clipboard'));

	client.on('copy', function (e) {
		var value = $.data(e.target, 'clipboard-value');
		e.client.setText(value);
	});

	// Notify successful copy and reset tooltip title
	client.on('aftercopy', function (e) {
		$(e.target)
			.attr('title', 'Copied!')
			.tooltip('fixTitle')
			.tooltip('show')
			.attr('title', 'Copy to clipboard')
			.tooltip('fixTitle');
	});

	// Notify copy failure
	ZeroClipboard.on('error', function (e) {
		$(e.target)
			.attr('title', e.message)
			.tooltip('fixTitle')
			.tooltip('show');
	});
});
