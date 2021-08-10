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

    filArr = {
        type: [],
        star: [],
        brand: [],
        price: [],
        platform: [],
        viewDis: [],
        display: [],
        resol: [],
        year: [],
        size: []
    };

    $('.right').click(function () {
        filArr = {
            type: [],
            star: [],
            brand: [],
            price: [],
            platform: [],
            viewDis: [],
            display: [],
            resol: [],
            year: [],
            size: []
        };
        $('.right').each(function () {
            if ($(this).is(':checked')) {
                parent = $(this).parent().parent().parent().attr('class');
                if (parent == "brand") {
                    filArr.brand.push($(this).attr('id'));
                } else if (parent == "platform") {
                    filArr.platform.push($(this).attr('id'));
                } else if (parent == "view-dist") {
                    filArr.viewDis.push($(this).attr('id'));
                } else if (parent == "display") {
                    filArr.display.push($(this).attr('id'));
                } else if (parent == "hd") {
                    filArr.resol.push($(this).attr('id'));
                } else if (parent == "year") {
                    filArr.year.push($(this).attr('id'));
                } else if (parent == "size") {
                    filArr.size.push($(this).attr('id'));
                }

            }
        })

        filter();
        console.log(filArr);
        console.log(idArr);
        console.log(output);

    });
});
output=[];
function filter() {
    for (i = 0; i < data.length; i++) {
        x = "#id0" + i;
        $(x).hide();
        idfilter(i);
        for(j=0;j<Object.values(filArr).length;j++){
            gotdata=Object.entries(idArr)[j];
            checkdata=Object.entries(filArr)[j];
            for(k=0;k<checkdata.length;k++){
                got=gotdata[1];
                check=checkdata[k+1];
                if(got==check){
                    output.push(x);
                }
            }

        }
    }
}



function idfilter(i) {
    
idArr = {
    type: [],
    star: [],
    brand: [],
    price: [],
    platform: [],
    viewDis: [],
    display: [],
    resol: [],
    year: [],
    size: []
};
    for (j = 0; j < data[1].specs.length; j++) {
        y1 = data[i].specs[j].split(' ');
        y = y1[1];
        if (j == 0) {

            idArr.type.push(y)
        }
        if (j == 1) {
            idArr.star.push(y)
        }
        if (j == 2) {
            idArr.brand.push(y)
        }
        if (j == 3) {
            idArr.price.push(y)
        }
        if (j == 4) {
            idArr.platform.push(y)
        }
        if (j == 5) {
            idArr.viewDis.push(y)
        }
        if (j == 6) {
            idArr.display.push(y)
        }
        if (j == 7) {
            idArr.resol.push(y)
        }
        if (j == 8) {
            idArr.year.push(y)
        }
        if (j == 9) {
            idArr.size.push(y)
        }
    }
}

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
        $('.container-right').append('<div class="noResult">No results found<div>');
    }
    if (count != 0) {
        $('.noResult').hide();
    }
    $("html, body").animate({
        // scrollTop: "0"
    }, 500);
}



























/*
function filter() {
//     outArr = {
//         brands: [],
//         resolution: [],
//         year: [],
//     }

//     for (i = 0; i < data.length; i++) {
//         var x = "#id0" + i;
//         var len = Object.values(filArr).length;
//         for (j = 0; j < len; j++) {
//             checkfilter = Object.entries(filArr)[j][1];
//             if (checkfilter.length != 0) {
//                 for (k = 0; k < checkfilter.length; k++) {
//                     check = checkfilter[k].toUpperCase();
//                     for (l = 0; l < data[i].specs.length; l++) {
//                         given = data[i].specs[l].split(' ');
//                         givenVal = given[1].toUpperCase();
//                         if (check == givenVal) {
//                             // if (l == 0) {
//                             //     type.push(x)
//                             // };
//                             // if (l == 1) {
//                             //     type.push(x)
//                             // };
//                             if (l == 2) {
//                                 outArr.brands.push(x)
//                             };
//                             // if (l == 3) {
//                             //     type.push(x)
//                             // };
//                             // if (l == 4) {
//                             //     type.push(x)
//                             // };
//                             // if (l == 5) {
//                             //     type.push(x)
//                             // };
//                             // if (l == 6) {
//                             //     type.push(x)
//                             // };
//                             if (l == 7) {
//                                 outArr.resolution.push(x)
//                             };
//                             if (l == 8) {
//                                 outArr.year.push(x)
//                             };
//                             // if (l == 9) {
//                             //     type.push(x)
//                             // };
//                             // if (l == 10) {
//                             //     type.push(x)
//                             // };
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     var a = outArr.brands
//     var b = outArr.resolution
//     var c = outArr.year
//     filteredArray = ($(a).filter($(b))).filter($(c))
//     for (i = 0; i < data.length; i++) {
//         x = "#id0" + i;
//         $(x).hide();
//         for (j = 0; j < filteredArray.length; j++) {
//             $(filteredArray[j]).show();
//         }
//     }
// }

// for (j = 0; j < filArr.brand.length; j++) {
        //     givenid = filArr.brand[j].toUpperCase();
        //     var namedata = data[i].specs[2].slice(6).toUpperCase();
        //     if (namedata == givenid) {
        //         brands.push(x)
        //     }
        // }
        // for (j = 0; j < filArr.resol.length; j++) {
        //     givenid = filArr.resol[j].toUpperCase();
        //     var namedata = data[i].specs[7].slice(3).toUpperCase();
        //     if (namedata == givenid) {
        //         resolution.push(x)
        //     }
        // }
        // for (j = 0; j < filArr.year.length; j++) {
        //     givenid = filArr.year[j].toUpperCase();
        //     var namedata = data[i].specs[8].slice(5);
        //     if (namedata == givenid) {
        //         year.push(x)
        //     }
        // }


        
var outArrBrand = [];
var outArrPrice = [];
var name = [];

function filter() {
    outArrBrand = [];

    for (j = 0; j < filArr.length; j++) {
        given = filArr[j].toUpperCase();
        for (i = 0; i < data.length; i++) {
            var x = "#id0" + i;
            name = $('.pro-details>h3').eq(1 + i).data("brand").slice(0, given.length).toUpperCase();
            if (name == given) {
                outArrBrand.push(x)
            }
        }
    }
}

	//	Multi-Filters using Array

	var filArr = [];
	//	brands filter
	$('#mi').click(function () {
		let right = $(this).is(':checked');
		if (right) {
			filArr.push("mi")
			console.log(filArr);
		}
		if (!right) {
			let spliceVal = filArr.indexOf("mi");
			if (spliceVal > -1) {
				filArr.splice(spliceVal, 1);
				console.log(filArr);
			}
		}
	})
	$('#oneplus').click(function () {
		let right = $(this).is(':checked');
		if (right) {
			filArr.push("oneplus")
			console.log(filArr);
		}
		if (!right) {
			let spliceVal = filArr.indexOf("oneplus");
			if (spliceVal > -1) {
				filArr.splice(spliceVal, 1);
				console.log(filArr);
			}
		}
	})
	$('#amazonbasics').click(function () {
		let right = $(this).is(':checked');
		if (right) {
			filArr.push("amazonbasics")
			console.log(filArr);
		}
		if (!right) {
			let spliceVal = filArr.indexOf("amazonbasics");
			if (spliceVal > -1) {
				filArr.splice(spliceVal, 1);
				console.log(filArr);
			}
		}
	})
	$('#samsung').click(function () {
		let right = $(this).is(':checked');
		if (right) {
			filArr.push("samsung")
			console.log(filArr);
		}
		if (!right) {
			let spliceVal = filArr.indexOf("samsung");
			if (spliceVal > -1) {
				filArr.splice(spliceVal, 1);
				console.log(filArr);
			}
		}
	})
	$('#lg').click(function () {
		let right = $(this).is(':checked');
		if (right) {
			filArr.push("lg")
			console.log(filArr);
		}
		if (!right) {
			let spliceVal = filArr.indexOf("lg");
			if (spliceVal > -1) {
				filArr.splice(spliceVal, 1);
				console.log(filArr);
			}
		}
	})
	$('#tcl').click(function () {
		let right = $(this).is(':checked');
		if (right) {
			filArr.push("tcl")
			console.log(filArr);
		}
		if (!right) {
			let spliceVal = filArr.indexOf("tcl");
			if (spliceVal > -1) {
				filArr.splice(spliceVal, 1);
				console.log(filArr);
			}
		}
	})
	$('#sony').click(function () {
		let right = $(this).is(':checked');
		if (right) {
			filArr.push("sony")
			console.log(filArr);
		}
		if (!right) {
			let spliceVal = filArr.indexOf("sony");
			if (spliceVal > -1) {
				filArr.splice(spliceVal, 1);
				console.log(filArr);
			}
		}
	})
	var outputArr = [];

	$('.container').click(function () {
		for (j = 0; j <= filArr.length; j++) {
			let g = filArr[j]
			filter = g;
			brands();
			console.log(outputArr)
		}
	});
*/



/////////////////////////////////////////////////////////////////////////////////////////////////////
/*var flag=false;
    $(window).scroll(function(){
        if(($(window).scrollTop()+$(window).height() > $(document).height()-700) && !flag){
            flag = true;
            var minLeng = $(".container-right").children().length-1;
            max=minLeng+10
            dataRender(minLeng,max );
            console.log('alert')
        }
        if(($(window).scrollTop()+$(window).height() < $(document).height()-700) && flag){
            flag = false;
        }
    });*/




/* $('.tenk').click(function () {
        for (i = 0; i < data.length; i++) {
            var price = parseInt($('.rate').eq(i + 1).data("rate"));
            var proId = "#id0" + i;
            if (price < 10000) {
                $(proId).show();
            } else {
                $(proId).hide();
            }
        };
    });
    $('.twentyk').click(function () {
        for (i = 0; i < data.length; i++) {
            var price = parseInt($('.rate').eq(i + 1).data("rate"));
            var proId = "#id0" + i;
            if (price > 10000 && price < 20000) {
                $(proId).show();
            } else {
                $(proId).hide();
            }
        };
    });
    $('.thirtyk').click(function () {
        for (i = 0; i < data.length; i++) {
            var price = parseInt($('.rate').eq(i + 1).data("rate"));
            var proId = "#id0" + i;
            if (price > 20000 && price < 30000) {
                $(proId).show();
            } else {
                $(proId).hide();
            }
        };
    });
    $('.fourtyk').click(function () {
        for (i = 0; i < data.length; i++) {
            var price = parseInt($('.rate').eq(i + 1).data("rate"));
            var proId = "#id0" + i;
            if (price > 30000 && price < 40000) {
                $(proId).show();
            } else {
                $(proId).hide();
            }
        };
    });
    $('.fiftyk').click(function () {
        for (i = 0; i < data.length; i++) {
            var price = parseInt($('.rate').eq(i + 1).data("rate"));
            var proId = "#id0" + i;
            if (price > 40000 && price < 50000) {
                $(proId).show();
            } else {
                $(proId).hide();
            }
        };
    });
    $('.overfifty').click(function () {
        for (i = 0; i < data.length; i++) {
            var price = parseInt($('.rate').eq(i + 1).data("rate"));
            var proId = "#id0" + i;
            if (price > 50000) {
                $(proId).show();
            } else {
                $(proId).hide();
            }
        };
    });
    $('.anyprice').click(function () {
        for (i = 0; i < data.length; i++) {
            var price = parseInt($('.rate').eq(i + 1).data("rate"));
            var proId = "#id0" + i;
            if (price > 0) {
                $(proId).show();
            } else {
                $(proId).hide();
            }
        };
    });
    $('.four-star').click(function () {
        for (i = 0; i < data.length; i++) {
            var stars = $('.ratings').eq(i + 1).data('star');
            var proId = "#id0" + i;
            if (stars >= 4) {
                $(proId).show();
            } else {
                $(proId).hide();
            }
        };
    });
    $('.three-star').click(function () {
        for (i = 0; i < data.length; i++) {
            var stars = $('.ratings').eq(i + 1).data('star');
            var proId = "#id0" + i;
            if (stars >= 3) {
                $(proId).show();
            } else {
                $(proId).hide();
            }
        };
    });
    $('.two-star').click(function () {
        for (i = 0; i < data.length; i++) {
            var stars = $('.ratings').eq(i + 1).data('star');
            var proId = "#id0" + i;
            if (stars >= 2) {
                $(proId).show();
            } else {
                $(proId).hide();
            }
        };
    });
    $('.one-star').click(function () {
        for (i = 0; i < data.length; i++) {
            var stars = $('.ratings').eq(i + 1).data('star');
            var proId = "#id0" + i;
            if (stars >= 1) {
                $(proId).show();
            } else {
                $(proId).hide();
            }
        };
    });
    $('#mi').click(function () {
        for (i = 0; i < data.length; i++) {
            var brand = $('.pro-details>h3').eq(i + 1).data('brand').slice(0, 2);
            var proId = "#id0" + i;
            if ($('#mi').is(':checked')) {
                if (brand == "Mi") {
                    $(proId).show();
                } else {
                    $(proId).hide();
                }
            } else {
                $(proId).show();
            }

        };
    });
    $('#oneplus').click(function () {
        for (i = 0; i < data.length; i++) {
            var brand = $('.pro-details>h3').eq(i + 1).data('brand').slice(0, 7);
            var proId = "#id0" + i;
            if ($('#oneplus').is(':checked')) {
                if (brand == "OnePlus") {
                    $(proId).show();
                } else {
                    $(proId).hide();
                }
            } else {
                $(proId).show();
            }
        };
    });
    $('#amazonbasics').click(function () {
        for (i = 0; i < data.length; i++) {
            var brand = $('.pro-details>h3').eq(i + 1).data('brand').slice(0, 6);
            var proId = "#id0" + i;
            if ($(this).is(':checked')) {
                if (brand == "Amazon") {
                    $(proId).show();
                } else {
                    $(proId).hide();
                }
            } else {
                $(proId).show();
            }
        };
    });
    $('#samsung').click(function () {
        for (i = 0; i < data.length; i++) {
            var brand = $('.pro-details>h3').eq(i + 1).data('brand').slice(0, 7);
            var proId = "#id0" + i;
            if ($(this).is(':checked')) {
                if (brand == "Samsung") {
                    $(proId).show();
                } else {
                    $(proId).hide();
                }
            } else {
                $(proId).show();
            }
        };
    });
    $('#lg').click(function () {
        for (i = 0; i < data.length; i++) {
            var brand = $('.pro-details>h3').eq(i + 1).data('brand').slice(0, 2);
            var proId = "#id0" + i;
            if ($(this).is(':checked')) {
                if (brand == "LG") {
                    $(proId).show();
                } else {
                    $(proId).hide();
                }
            } else {
                $(proId).show();
            }
        };
    });
    $('#tcl').click(function () {
        for (i = 0; i < data.length; i++) {
            var brand = $('.pro-details>h3').eq(i + 1).data('brand').slice(0, 3);
            var proId = "#id0" + i;
            if ($(this).is(':checked')) {
                if (brand == "TCL") {
                    $(proId).show();
                } else {
                    $(proId).hide();
                }
            } else {
                $(proId).show();
            }
        };
    });
    $('#sony').click(function () {
        for (i = 0; i < data.length; i++) {
            var brand = $('.pro-details>h3').eq(i + 1).data('brand').slice(0, 4);
            var proId = "#id0" + i;
            if ($(this).is(':checked')) {
                if (brand == "sony") {
                    $(proId).show();
                } else {
                    $(proId).hide();
                }
            } else {
                $(proId).show();
            }
        };
    });
    $('#23in').click(function () {
        for (i = 0; i < data.length; i++) {
            var index = $('.pro-details>h3').eq(i + 1).data('brand').indexOf("inch");
            var k = index - 3
            var l = index - 1
            var size = parseInt($('.pro-details>h3').eq(i + 1).data('brand').slice(k, l));
            var proId = "#id0" + i;
            if ($(this).is(':checked')) {
                if (size <= 23) {
                    $(proId).show();
                } else {
                    $(proId).hide();
                }
            } else {
                $(proId).show();
            }
        };
    });
    $('.smart').click(function () {
        for (i = 0; i < data.length; i++) {
            var smartTv = $('.pro-details>h3').eq(i + 1).data('brand').indexOf('Smart');
            var proId = "#id0" + i;
            $(proId).show();
            if (smartTv > -1) {
                $(proId).show();
            } else {
                $(proId).hide();
            }
        }
    });
    $('.std').click(function () {
        for (i = 0; i < data.length; i++) {
            var smartTv = $('.pro-details>h3').eq(i + 1).data('brand').indexOf('Smart');
            var proId = "#id0" + i;
            $(proId).show();
            if (smartTv > -1) {
                $(proId).hide();
            }
        }
    });
    $('.all').click(function () {
        for (i = 0; i < data.length; i++) {
            var proId = "#id0" + i;
            $(proId).show();
        }
    });*/