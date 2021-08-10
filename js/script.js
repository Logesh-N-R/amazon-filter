$(document).ready(function () {
	dataRender();
	$('.Lan').click(function (a) {
		$('.inner').toggle().animate({
			opacity: '100%',
			top: '60px'
		}, 1000);
		$('.inner-1').hide();
		$('.inner-1').animate({
			opacity: '0%',
			top: '80px'
		});
		a.stopPropagation();
	});

	$('.sign_in').click(function (a) {
		$('.inner-1').toggle().animate({
			opacity: '100%',
			top: '60px'
		}, 1000);
		$('.inner').hide();
		$('.inner').animate({
			opacity: '0%',
			top: '80px'
		});
		a.stopPropagation();
	});

	$('body').click(function (a) {
		$('.inner').animate({
			opacity: '0%',
			top: '80px'
		}, 1000);
		$('.inner-1').animate({
			opacity: '0%',
			top: '80px'
		}, 1000);
		result();
	});

	$('.footer-top').click(function () {
		$("html, body").animate({
			scrollTop: "0"
		}, 2000);
	});

	$('#counts').html(data.length)
	$('#from').html(data.length)


	$('.right').click(function () {
		choosedFilters = {};
		filterNames = [];
		$('.right').each(function () {
			if ($(this).is(":checked")) {
				filterType = $(this).data("type");
				filterValue = $(this).data("id");
				if (!choosedFilters[filterType]) {
					choosedFilters[filterType] = [];
					if (!filterNames.includes(filterType)) {
						filterNames.push(filterType)
					}

				}
				choosedFilters[filterType].push(filterValue);
			}
		})

		filter();
		console.log(choosedFilters);
		console.log(comparingData);
	})
});

// filterNames = ["brand","platform","viewDist", "display", "hd", "year"];

function filter() {
	output = [];
	for (var i = 0; i < data.length; i++) {
		x = "#id0" + i;
		$(x).show();
		comparingData = {};
		for (var j = 0; j < filterNames.length; j++) {
			if (!comparingData[filterNames[j]]) {
				comparingData[filterNames[j]] = [];
			};
			value = data[i][filterNames[j]];

			if (!comparingData[filterNames[j]][value]) {
				comparingData[filterNames[j]].push(value);
			}
			var len = choosedFilters[filterNames[j]].length;
			for (k = 0; k < len; k++) {
				filterVal = choosedFilters[filterNames[j]][k];
				dataVal = comparingData[filterNames[j]][0];
				if (filterVal == dataVal) {
					break;
				} else if (filterVal != dataVal) {
					if (len == k + 1) {
						$(x).hide();
					} else {
						continue;
					}
				}
			}
		}
	}
}



//functions to work multiple times

//function for render products at the begining
function dataRender(a) {
	var a = data.length
	var container = $('.products:eq(0)');
	var cloned;
	for (i = 0; i < a; i++) {
		cloned = container.clone();
		Id = "id0" + i;
		currentData = data[i];
		currentImg = imagepath[i];
		$(cloned).appendTo('.container-right');
		$(cloned).find('.pro-details>h3').html(currentData.name).data("brand", currentData.name);
		$(cloned).find('.ratings').html(currentData.rating).data("star", currentData.rating.slice(0, 1));
		$(cloned).find('.price .rate').html(currentData.price.slice(1, 7)).data("rate", currentData.price.slice(1, 7).replace(/,/g, ""));
		$(cloned).find('.offer').html(currentData.save);
		$(cloned).find('.delivery .free').html(currentData.delivery.slice(0, 17));
		$(cloned).find('.delivery .date').html(currentData.delivery.slice(17));
		$(cloned).find('.pro-img>img').attr('src', currentImg.path);
		$(cloned).attr("id", Id);
	}
};
//function for render products at the begining

//function to show no result found
function result() {
	var count = 0;
	for (i = 0; i < data.length; i++) {
		var proId = "#id0" + i;
		visPro = $(proId).is(':visible');
		if (visPro) {
			count = count + 1;
		}
	};
	$('#counts').html(count)
	$('#from').html(data.length)
	if (count == 0) {
		$('.noResult').show();
	}
	if (count != 0) {
		$('.noResult').hide();
	}
	$("html, body").animate({
		scrollTop: "0"
	}, 500);
};
//function to show no result found
