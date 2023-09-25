const Obj = {
    "type":"div",
    "class": "container",
    "child" : [
        {
            "type" : "div",
            "class" : "card",
            "child": [
                {
                    "type":"div",
                    "class":"left",
                    "child" : [
                        {
                            "type" : "span",
                            "class" : "left-span",
                            "text" : "Impression"
                        },
                        {
                            "type" : "h3",
                            "class" : "left-h3",
                            "text" : "1,563"
                        },
                        {
                            "type" : "div",
                            "class" : "left-date",
                            "text" : "May 23 - June 01 (2017)"
                        }
                    ]
                },
                {
                    "type":"div",
                    "class":"right",
                    "child" : [
                        {
                            "type" : "img",
                            "class" : "right-img",
                            "src" : "/images/user.webp",
                            "alt" : "profie"
                        }
                    ]
                }
            ]
        },
        {
            "type" : "div",
            "class" : "card",
            "child": [
                {
                    "type":"div",
                    "class":"left",
                    "child" : [
                        {
                            "type" : "span",
                            "class" : "left-span",
                            "text" : "Goal"
                        },
                        {
                            "type" : "h3",
                            "class" : "left-h3",
                            "text" : "30,564"
                        },
                        {
                            "type" : "div",
                            "class" : "left-date",
                            "text" : "May 23 - June 01 (2017)"
                        }
                    ]
                },
                {
                    "type":"div",
                    "class":"right",
                    "child" : [
                        {
                            "type" : "img",
                            "class" : "right-img",
                            "src" : "/images/user.webp",
                            "alt" : "profie"
                        }
                    ]
                }
            ]
        },
        {
            "type" : "div",
            "class" : "card",
            "child": [
                {
                    "type":"div",
                    "class":"left",
                    "child" : [
                        {
                            "type" : "span",
                            "class" : "left-span",
                            "text" : "Impact"
                        },
                        {
                            "type" : "h3",
                            "class" : "left-h3",
                            "text" : "1,563"
                        },
                        {
                            "type" : "div",
                            "class" : "left-date",
                            "text" : "May 23 - June 01 (2017)"
                        }
                    ]
                },
                {
                    "type":"div",
                    "class":"right",
                    "child" : [
                        {
                            "type" : "img",
                            "class" : "right-img",
                            "src" : "/images/user.webp",
                            "alt" : "profie"
                        }
                    ]
                }
            ]
        },
    ]
}

function createEle(Obj){
    let ele = document.createElement(Obj.type);

    if(Obj.class){
        ele.classList.add(Obj.class);
    }
    if(Obj.src){
        ele.src = Obj.src;
    }
    if(Obj.alt){
        ele.alt = Obj.alt;
    }
    if(Obj.text){
        ele.innerText = Obj.text;
    }

    if(Obj.child){
        for(let child of Obj.child){
            ele.appendChild(createEle(child));
        }
    }

    return ele;
}

let container = createEle(Obj);

document.body.appendChild(container);
