/**
 *
 * mentorship-samples
 *
 * Created by Jason Wilson <jason@wilsons.io>
 * 7/11/17.
 *
 */

// script

const roller = document.querySelector('.roller');
const rollerContent = document.querySelector('.roller__content');
const rollerItems = document.querySelectorAll('.item__logo')

const roll = ( roller, content ) => {
  //console.log("roll");
  const
    offset = roller.offsetHeight,
    max = -1 * ( content.offsetHeight-offset );
  
  let currTop = parseInt(content.style.top, 10)
  
  //console.log("Offset: ", offset, " Max: ", max, " CurrTop: ", currTop);
  
  if( isNaN(currTop) ) currTop = 0;
  
  if( currTop <= max ) {
    content.style.top = '0px';
  } else {
    content.style.top = `${currTop - offset}px`;
  }
  return
}

const ordRoll = ( items, roller, content ) => {
  
  const increment = Math.floor( content.offsetWidth / items[0].offsetWidth );
  
  items.forEach( (item) => {
    item.style.order = (item.style.order - increment) % items.length;
});

}

//const rolling = window.setInterval( () => { roll(roller, rollerContent) }, 3500);
const init = ( roller, rollerContent, rollerItems ) => {
  
  //Determine columns visible
  const increment = Math.floor( rollerContent.offsetWidth / rollerItems[0].offsetWidth );
  
  rollerItems.forEach( (item, i) => {
    //set first margins
    if( i <= 1 ) {
    item.style.marginTop = item.offsetHeight;
  } else {
    item.style.marginTop = 0;
  }
  //expose initial order to items
  item.style.order = i + increment;
});
  
  rollerContent.style.top = `${-1 * roller.offsetHeight}px`;
  
  const rolling = window.setInterval( () => { ordRoll(rollerItems, roller, rollerContent) }, 3500);
}

init(roller, rollerContent, rollerItems);
