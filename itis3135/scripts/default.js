$(function() {
    console.log('Script Imported!')
    const pathname = String(location.pathname.split("/").splice(-1))
    // console.log(pathname)
    const links = {
        "1": {
            "url": "index.html",
            "text": "Home",
            "alt": "Home Page"
        },
        "2": {
            "url": "introduction.html",
            "text": "Introduction",
            "alt": "Introduction page"
        },
        "3": {
            "url": "contract.html",
            "text": "Contract",
            "alt": "Contract"
        },
        "4": {
            "url": "tables.html",
            "text": "Tables",
            "alt": "Tables page"
        },
        "5": {
            "url": "forms.html",
            "text": "Forms",
            "alt": "Forms page"
        }

    };

    console.log(links);



    const linkSeperator = " | ";
    let htmlString = "";

    for(var id in links)
    {
        if(pathname === links[id]['url'])
        {
            htmlString += links[id]['text'];
            console.log("first if");
        }
        else
        {
            htmlString += '<a href=" ' + links[id]['url'] + '">' + links[id]['text'] + '</a>';
            console.log("Else from first if")
        }
        console.log(Number(id));
        console.log(Object.keys(links).length);
        if(Number(id) < Object.keys(links).length)
        {
            htmlString += linkSeperator;
            console.log("second if");
        }
    }

    $("#siteLinks").html(htmlString);
    console.log("bing!");


});