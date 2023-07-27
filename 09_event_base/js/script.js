var btn = document.getElementById('submit'),
    container = document.querySelector('.container')

btn.addEventListener('click', function(){

// 클릭하면 실제로 할일
});

container.addEventListener('mouseenter', function(){
    console.log('마우스가 들어왔음');

});


container.addEventListener('mouseleave', function(){
    console.log('마우스가 나갔음');
    
});