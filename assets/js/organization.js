$(function () {

    $('.tree-list li a').on('click', function(e){
        e.preventDefault();

        if($(this).parent().hasClass('tree-item-main')){ 
            $('.tree-list').removeClass('shrink');
            $('.tree-item').removeClass('active');
            activeTree($(this));
            return; 
        }

        let hastree = $(this).parent().find('.tree-list');
        if(hastree.length > 0){
            
            $('.tree-list').removeClass('shrink');
            $(this).parents('.tree-list').addClass('shrink');

            activeTree($(this));
        }
    });

    function activeTree($elm){
        let $mainParent = $('li.tree-item-main');
        let $parentLi = $elm.parent();
        let $parentUl = $parentLi.parent();
        let $childUl = $parentLi.find(' > .tree-list');

        let activated = $parentLi.hasClass('active');
        if(!activated){
            $parentLi.addClass('active').siblings().removeClass('active').find('.tree-item.active').removeClass('active');
        }else{
            $parentLi.removeClass('active').find('.tree-item.active').removeClass('active');
            $parentUl.removeClass('shrink');
        }

        addVerticalLine($elm, $parentLi, $parentUl, $childUl);
        fixChildTreeTop($mainParent, $parentLi, $childUl)
    }

    function addVerticalLine($elm, $parentLi, $parentUl, $childUl){
        let firstTree = $parentUl.parent().hasClass('tree-item-main');
        let itemPos = $parentLi.index();
        
        $parentLi.siblings().find('.lin').removeClass('extend');
        $parentUl.parent().find('> .lin').addClass('extend');
        $parentLi.find('> .lin').addClass('extend');

        $parentLi.find('.vertical-line').remove();
        $parentLi.siblings().find('.vertical-line').remove();

        if((!firstTree) || (firstTree && itemPos > 0)){

            let parentTop = $parentUl.parent().offset().top;
            let childTop = $parentLi.offset().top;
            let lineHeight = (parentTop < childTop )? childTop - parentTop : parentTop - childTop;
            let direction = (parentTop > childTop)? 'top' : 'bottom';

            $elm.parent().append(`<span class="vertical-line ${direction}" style="height:${lineHeight}px">`);
        }
    }

    function fixChildTreeTop($mainParent, $parentLi, $childUl){
        let mainParentTop = $mainParent.offset().top;
        let parentLiTop = $parentLi.offset().top;
        let childTop = $childUl.offset().top;
        
        if(childTop <= mainParentTop){
            $childUl.addClass('topFixed').css({'top':`-${parentLiTop-mainParentTop}px`});
        }else{
            $childUl.removeClass('topFixed').css({'top':''});
        }
    }
})