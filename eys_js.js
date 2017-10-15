/**
 * Created by wyx on 2017/9/20.
 */
var x=0;
var y=0;
function step() {
    document.querySelector('.left_parent').style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
    document.querySelector('.right_parent').style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
    x = Math.random() * 50 - 30;
    y = Math.random() * 70 - 40;

    setTimeout(step,1000)
}
step()
