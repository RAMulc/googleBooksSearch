const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        authors: ["Suzanne Collins"],
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games",
    },
    {
        authors: ["David Flanagan"],
        description: "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript, including: Scripted HTTP and Ajax XML processing Client-side graphics using the canvas tag Namespaces in JavaScript--essential when writing complex programs Classes, closures, persistence, Flash, and JavaScript embedded in Java applications Part I explains the core JavaScript language in detail. If you are new to JavaScript, it will teach you the language. If you are already a JavaScript programmer, Part I will sharpen your skills and deepen your understanding of the language. Part II explains the scripting environment provided by web browsers, with a focus on DOM scripting with unobtrusive JavaScript. The broad and deep coverage of client-side JavaScript is illustrated with many sophisticated examples that demonstrate how to: Generate a table of contents for an HTML document Display DHTML animations Automate form validation Draw dynamic pie charts Make HTML elements draggable Define keyboard shortcuts for web applications Create Ajax-enabled tool tips Use XPath and XSLT on XML documents loaded with Ajax And much more Part III is a complete reference for core JavaScript. It documents every class, object, constructor, method, function, property, and constant defined by JavaScript 1.5 and ECMAScript Version 3. Part IV is a reference for client-side JavaScript, covering legacy web browser APIs, the standard Level 2 DOM API, and emerging standards such as the XMLHttpRequest object and the canvas tag. More than 300,000 JavaScript programmers around the world have madethis their indispensable reference book for building JavaScript applications. \"A must-have reference for expert JavaScript programmers...well-organized and detailed.\" -- Brendan Eich, creator of JavaScript",
        image: "http://books.google.com/books/content?id=2weL0iAfrEMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        link: "http://books.google.com.au/books?id=2weL0iAfrEMC&dq=javascript&hl=&source=gbs_api",
        title: "JavaScript: The Definitive Guide",
    },
    {
        authors: ["Thomas W. Schultz"],
        description: "This totally reworked book combines two previous books with material on networking. It is a complete guide to programming and interfacing the 8051 microcontroller-family devices for embedded applications.",
        image: "http://books.google.com/books/content?id=rI0c8kWbxooC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        link: "http://books.google.com.au/books?id=rI0c8kWbxooC&dq=c&hl=&source=gbs_api",
        title: "C and the 8051",
    },
    {
        authors: ["V. RAJARAMAN"],
        description: "This is a revised and enlarged version of the author's book which received wide acclamations in its earlier three editions. It provides a lucid and in-depth introduction to the programming language Fortran 77 which is widely used by scientists and engineers.The fourth edition is completely revised chapterwise and also minor corrections incorporated. A new standard for Fortran called Fortran 90 was introduced in early 90s and compilers for this version of Fortran were sold in early 1995 by computer vendors. All Fortran 77 programs will run without change with Fortran 90 compilers; however some aspects of Fortran 77 have been declared obsolete and will not run on future Fortran compilers_these are explained in this revised edition. An appendix consolidates these features. Fortran 90 is introduced in a new chapter which summarises all its features.",
        image: "http://books.google.com/books/content?id=s4SoW3wa-LgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        link: "http://books.google.com.au/books?id=s4SoW3wa-LgC&dq=fortran&hl=&source=gbs_api",
        title: "COMPUTER PROGRAMMING IN FORTRAN 77",
    },
    {
        authors: ["George Omura"],
        description: "The World's Bestselling AutoCAD Resource Now Fully Updated for the 2007 Release There's a reason why Mastering AutoCAD is so popular year after year. Loaded with concise explanations, step-by-step instructions, and hands-on projects, this comprehensive reference and tutorial from award-winning author George Omura has everything you need to become an AutoCAD expert. If you're new to AutoCAD, the tutorials will help you build your skills right away. If you're an AutoCAD veteran, Omura's in-depth explanations of the latest and most advanced features, including all the new 3D tools, will turn you into an AutoCAD pro. Whatever your experience level and however you use AutoCAD, you'll refer to this indispensable reference again and again. Coverage Includes Creating and developing AutoCAD drawings Drawing curves and applying solid fills Effectively using hatches, fields, and tables Manipulating dynamic blocks and attributes Linking drawings to databases and spreadsheets Keeping track of your projects with the Sheet Set Manager Creating cutaway and x-ray views to show off the interior of your 3D model Rendering realistic interior views with natural lighting Giving a hand-drawn look to 3D views Easily creating complex, free-form 3D shapes in minutes Making spiral forms with the Helix and Sweep tools Exploring your model in real time with the Walk and Fly tools Creating animated AVI files of your 3D projects Customizing AutoCAD using AutoLISP(r) Securing and authenticating your files Sharing files with non-AutoCAD users Featured on the CD Load the trial version of AutoCAD 2007 and get started on the lessons in the book. The CD also includes project files and finished drawings for all the book's exercises, a symbols library, a 2D and 3D parts library, and extra utilities to increase your productivity. Advance your skills even more with bonus chapters on VBA, Active X, architectural solid modeling, and working with external databases. \"Mastering AutoCAD 2007 has been fully updated to cover all of AutoCAD 2007's new or enhanced features including modeling, visual styles, lights and materials, rendering and animation, and changes users asked for in commonly used commands. This excellent revision to the bestselling Mastering AutoCAD series features concise explanations, focused examples, step-by-step instructions, and hands-on projects for both AutoCAD and AutoCAD LT.\" —Eric Stover, AutoCAD Product Manager \"Omura's explanations are concise, his graphics are excellent, and his examples are practical.\" —CADalyst Note: CD-ROM/DVD and other supplementary materials are not included as part of eBook file.",
        image: "http://books.google.com/books/content?id=gy42XYdb5OIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        link: "http://books.google.com.au/books?id=gy42XYdb5OIC&dq=autocad&hl=&source=gbs_api",
        title: "Mastering AutoCAD 2007 and AutoCAD LT 2007",
    },
];

db.Book.remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
