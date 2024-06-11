$(function () {

    var $table = $('.fixed-table');

    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (event) {
        $tabID = $(event.target).data('bs-target');
        if( $(`.tab-pane${$tabID}`).find($table).length > 0 ){ 
            if($table.length > 0){ 
                $table.each(function(i, e) {
                    buildTable($(e));
                });
            }
         }

        $('.datepicker').datepicker({
            autoclose: true,
            todayHighlight: true,
            orientation: 'bottom',
        }).datepicker('update', new Date());

        $('input[data-toggle="toggle"]').bootstrapToggle();
        
    });
    
    function buildTable($el) {
        $fixedLeft = +$el.data('left-fixed');
        $fixedRight = +$el.data('right-fixed');
        $el.bootstrapTable('destroy').bootstrapTable({
            fixedColumns: true,
            fixedNumber: $fixedLeft,
            fixedRightNumber: $fixedRight,
            // onPostBody:function(d){
            //     console.log($el.parent('.fixed-table-body'));
            //     new SimpleBar($el.parent('.fixed-table-body')[0]);
            // }
        });
    }

    if($table.length > 0){ 
        $table.each(function(i, e) {
            buildTable($(e));
        });
    }
})