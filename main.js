let collection = [
      { address: '1 fam way', company_code: 'SW' },
      { address: '1 sam way', company_code: 'IH' },
      { address: '1 sam way', company_code: 'IH' },
      { address: '1 aem way', company_code: 'AA' },
      { address: '1 zam way', company_code: 'SW' },
      { address: '1 cam way', company_code: 'IH' },
      { address: '1 sam way', company_code: 'SW' },
      { address: '1 wam way', company_code: 'IH' },
      { address: '1 aam way', company_code: 'IH' },
      { address: '1 aam way', company_code: 'IH' },
      { address: '1 aam way', company_code: 'IH' },
      { address: '1 aam way', company_code: 'IH' },
      { address: '1 abm way', company_code: ''},
      { address: '1 acm way', company_code: 'BB' }
    ];

let pattern = ['IH', 'SW'];


function orderByPattern(collection = [], pattern = []){
  if(!collection || pattern.length === 0 ){
    return collection;
  }
  let hm = {};
  let patternPos = 0;
  let result = [];
  pattern.map((e) => { hm[e.toLowerCase()] = [];});
  for(let i = 0; i < collection.length; i++){
    let code = collection[i].company_code && collection[i].company_code.toLowerCase();
    if(hm[code]){
      hm[code].push(collection[i]);
    } else {
      hm[code] = [collection[i]];
    }
  }
  for(let i = 0; i < collection.length; i++){
    if(patternPos >= pattern.length){
      patternPos = 0;
    }
    let identifier = pattern[patternPos].toLowerCase();
    let value = hm[identifier].shift();
    if(value){
      result.push(value);
    }
    patternPos++;
  }
  for (const key of Object.keys(hm)){
    if(hm[key].length > 0){
      while(hm[key].length){
        result.push(hm[key].shift());
      }
    }
  }
  return result;
}
orderByPattern(...variables);
