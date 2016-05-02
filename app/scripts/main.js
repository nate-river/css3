$(function(){
    $.getJSON('/css.json').done(function(data){
      var categorys = {};
      $.each(data, function(_,v){
        var key = v['spec name'];
        if ( ! categorys[ key ] ){
          categorys[ key ] = [];
        }
        categorys[ key ].push(v);
      })
      $('.main-content').append(function(){
        return  $.map(order, function( v, i ){
          var h1 = v.h1,  h2s = v.h2s;
          var html  =
          '<article class="theme'+[i%8]+'">' +
          '<h1>'+ h1 +'</h1>' +
          '<div>' +

          $.map(h2s, function(h2){
            return '<div>' +

            $.map(h2, function(v){
              return '<section>' +
              '<h2>'+ v +'</h2>' +
              '<ul>' +

              $.map(categorys[v], function(v){
                if( v.Name ){
                  var name =  (v.Name.indexOf(',') !== -1)?( v.Name.split(',')[0] ):v.Name ;
                }
                return '<li>' +
                '<a href="'+v.uri+'" title="'+v.Initial+'" '+
                'data-apply="'+v['Applies To']+'" '+
                'data-value="'+v.Value+'" data-initial="'+v.Initial+'">' +
                name +
                '</a>' +
                '</li>';
              }).join('') +

              '</ul>' +
              '</section>'
            }).join('') +

            '</div>';
          }).join('') +

          '</div>' +
          '</article>';
          return html;
          ///first loop end below!
        });
        //// append end below!
      });
      ///ajax .done end below!
    });
  });
