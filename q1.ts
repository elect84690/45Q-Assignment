// Install Node.js, TypeScript and VS Code on your computer.

// I have installed Node.js, Version: v20.9.0

// I have also installed typescript, version: 5.2.2

// I have Visual Studio Code 1.85.2 in my machine as well

/*  1. Open VS code and create a new folder in your machine
    2. Open Terminal window and add following command:
        tsc --init           
    This will generate a "tsconfig.json" file which includes all the settings to run your TS files
    3. Open "tsconfig.json" file and in line number 14 change the value of "target" to "ES2020"
    4. In line 28 change the "module" value to "NodeNext"
    5. In line 29 cange the "rootDir" value to "./src" (which is a folder that will conatin all the source file of TS)
    6. In line 30 change the "ModuleResolution" to "NodeNext" as well
    7. In line 58 change the "Outdir" value to "./dist" (when running your programe for first time through "tsc" command it will auto generate the dist(or any name that you specified) named folder to store all emitted JavaScript files and on later use of programe it will keep adding all the newly created JS files to this particular folder)
    8. Create a folder name "src" (or any name that you specified in Rootdir of "tsconfig.json" file)
    9. Go to this folder and create a new file and name it with ".ts" extension e.g. index.ts
    10. write you desired code in this file
    11. Transpile this code with simply writing tsc in terminal
    12. You will notice a folder name "dist" (or whatever you named in outDir will appear automatically which will conatsin a JS file with same name as your TS file but with .js extension e.g. index.js)
    13. Type cd followed by the foldr name specified in the "outDir" in the terminal e.g. "cd dist" to change the folder one step deeper in the location (you will notice that the cursor in the terminal now has added ...\dist> in the name)
    14. Type node followed by file name with ".js" extention e.g. node index.js and press enter
    15. If you have carried all the steps correctly then you will see your programe output in the terminal window
    16. If you encounter any error try to repeat all the steps and preferably start in a new location
*/

/* PLEASE READ THIS ONLY IF YOU ARE INTERESTED IN MAKING YOUR PROGRAME A NODE PROJECT AS WELL

    7a. You have finished your "tsconfig.json" file settings now type "npm init -y" in the terminal to declare this folder location as a node project
    7b. You will notice a "package.json" file will be created automatically
    7c. Open the file and after command with "main" type following command as well:
        "type": "module",
    7d. Now create a new file in the main folder and name it ".gitignore"
    7e. just type "node_modules" and close this file
*/ 

// You can use following statement as a test code for your .ts file

console.log("Hello World!");