"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4],{1484:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(4848),r=i(5680);const s={sidebar_position:2,id:"Windows Installation",title:"Windows installation Guide"},l="Windows Installation Guide for Stirling PDF",o={id:"Getting started/Installation/Local/Windows Installation",title:"Windows installation Guide",description:"Stirling PDF provides Windows compatibility through a downloadable .exe file, which can be obtained from here.",source:"@site/docs/Getting started/Installation/Local/Windows.md",sourceDirName:"Getting started/Installation/Local",slug:"/Getting started/Installation/Local/Windows Installation",permalink:"/Getting started/Installation/Local/Windows Installation",draft:!1,unlisted:!1,editUrl:"https://github.com/Stirling-Tools/Stirling-Tools.github.io/tree/main/docs/Getting started/Installation/Local/Windows.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"Windows Installation",title:"Windows installation Guide"},sidebar:"tutorialSidebar",previous:{title:"Unix installation Guide",permalink:"/Getting started/Installation/Local/Unix Installation"},next:{title:"API",permalink:"/API"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Required Dependencies",id:"required-dependencies",level:3},{value:"Optional Dependencies",id:"optional-dependencies",level:3},{value:"QPDF",id:"qpdf",level:4},{value:"LibreOffice",id:"libreoffice",level:4},{value:"Tesseract OCR",id:"tesseract-ocr",level:4},{value:"Weasyprint",id:"weasyprint",level:4},{value:"PDFtoHTML",id:"pdftohtml",level:4},{value:"Adding Directories to System PATH",id:"adding-directories-to-system-path",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"Notes",id:"notes",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"windows-installation-guide-for-stirling-pdf",children:"Windows Installation Guide for Stirling PDF"}),"\n",(0,t.jsxs)(n.p,{children:["Stirling PDF provides Windows compatibility through a downloadable .exe file, which can be obtained from ",(0,t.jsx)(n.a,{href:"https://github.com/Stirling-Tools/Stirling-PDF/releases/latest",children:"here"}),".\nThis is a streamlined version of the application, offering the same capabilities as the Stirling-PDF-Ultra-lite found in Docker, but in a compact 80MB executable!"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.h3,{id:"required-dependencies",children:"Required Dependencies"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["JAVA 17 or 21 (21 preferred) - If not installed, the application will provide a download link","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Download from ",(0,t.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/downloads/",children:"Oracle's official site"})," or ",(0,t.jsx)(n.a,{href:"https://adoptium.net/temurin/releases/",children:"Eclipse Temurin"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"optional-dependencies",children:"Optional Dependencies"}),"\n",(0,t.jsx)(n.p,{children:"These dependencies enable additional features in Stirling PDF. Install only the ones you need:"}),"\n",(0,t.jsx)(n.h4,{id:"qpdf",children:"QPDF"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Download from ",(0,t.jsx)(n.a,{href:"https://qpdf.sourceforge.io/",children:"QPDF's official site"})]}),"\n",(0,t.jsx)(n.li,{children:"Enables PDF compression and other operations"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"libreoffice",children:"LibreOffice"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Download and install from ",(0,t.jsx)(n.a,{href:"https://www.libreoffice.org/download/download-libreoffice/",children:"LibreOffice's official site"})]}),"\n",(0,t.jsx)(n.li,{children:"Enables PDF to DOCX conversion and other document format conversions"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"tesseract-ocr",children:"Tesseract OCR"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download the installer from ",(0,t.jsx)(n.a,{href:"https://github.com/UB-Mannheim/tesseract/wiki",children:"UB Mannheim's GitHub"})]}),"\n",(0,t.jsx)(n.li,{children:"During installation, check additional languages you need"}),"\n",(0,t.jsxs)(n.li,{children:["Add to settings.yml in your Stirling PDF installation directory:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"system:\n  tessdataDir: C:\\\\Program Files\\\\Tesseract-OCR\\\\tessdata\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enables OCR functionality for PDFs"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"weasyprint",children:"Weasyprint"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download from ",(0,t.jsx)(n.a,{href:"https://github.com/Kozea/WeasyPrint/releases",children:"Weasyprint's releases"})]}),"\n",(0,t.jsxs)(n.li,{children:["Create a directory (e.g., ",(0,t.jsx)(n.code,{children:"c:\\weasyprint\\"}),") and place weasyprint.exe there"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enables URL to PDF conversion"}),"\n",(0,t.jsx)(n.li,{children:"Note: Some antivirus software may flag weasyprint.exe - you may need to whitelist it"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"pdftohtml",children:"PDFtoHTML"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download from ",(0,t.jsx)(n.a,{href:"https://sourceforge.net/projects/pdftohtml/",children:"SourceForge"})]}),"\n",(0,t.jsxs)(n.li,{children:["Create a directory (e.g., ",(0,t.jsx)(n.code,{children:"c:\\pdftohtml\\"}),") and place pdftohtml.exe there"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enables PDF to HTML conversion"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"adding-directories-to-system-path",children:"Adding Directories to System PATH"}),"\n",(0,t.jsx)(n.p,{children:"After installing dependencies, you'll need to add their directories to your system's PATH. Here's how:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open Windows Search (Windows key + S)"}),"\n",(0,t.jsx)(n.li,{children:'Type "Environment Variables" and click "Edit the system environment variables"'}),"\n",(0,t.jsx)(n.li,{children:'Click "Environment Variables" button at the bottom'}),"\n",(0,t.jsx)(n.li,{children:'Under "System variables", find and select "Path"'}),"\n",(0,t.jsx)(n.li,{children:'Click "Edit"'}),"\n",(0,t.jsxs)(n.li,{children:['Click "New" to add each required path:',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For LibreOffice: ",(0,t.jsx)(n.code,{children:"C:\\Program Files\\LibreOffice\\program"})]}),"\n",(0,t.jsxs)(n.li,{children:["For Tesseract: ",(0,t.jsx)(n.code,{children:"C:\\Program Files\\Tesseract-OCR"})]}),"\n",(0,t.jsxs)(n.li,{children:["For Weasyprint: ",(0,t.jsx)(n.code,{children:"C:\\weasyprint"})," (or your chosen directory)"]}),"\n",(0,t.jsxs)(n.li,{children:["For PDFtoHTML: ",(0,t.jsx)(n.code,{children:"C:\\pdftohtml"})," (or your chosen directory)"]}),"\n",(0,t.jsxs)(n.li,{children:["For QPDF: The installation directory (usually ",(0,t.jsx)(n.code,{children:"C:\\Program Files\\qpdf\\bin"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'Click "OK" on all windows to save changes'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download the latest Stirling PDF .exe from the ",(0,t.jsx)(n.a,{href:"https://github.com/Stirling-Tools/Stirling-PDF/releases/latest",children:"releases page"})]}),"\n",(0,t.jsx)(n.li,{children:"Install any desired optional dependencies following the instructions above"}),"\n",(0,t.jsx)(n.li,{children:"Launch the Stirling PDF executable"}),"\n",(0,t.jsx)(n.li,{children:"Access the web interface through your browser (the application will provide the URL)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The application hosts a web server that is accessible to anyone on your network"}),"\n",(0,t.jsx)(n.li,{children:"If you install multiple Python-based dependencies, ensure they're using the same Python installation to avoid conflicts"}),"\n",(0,t.jsx)(n.li,{children:"Make sure to restart Stirling PDF after installing new dependencies or modifying PATH variables"}),"\n",(0,t.jsx)(n.li,{children:"Some features will be unavailable until their required dependencies are installed"}),"\n",(0,t.jsx)(n.li,{children:"The web interface will indicate which features require additional dependencies"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verifying PATH Settings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Open Command Prompt (cmd)"}),"\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"echo %PATH%"})," to see all directories in your PATH"]}),"\n",(0,t.jsxs)(n.li,{children:["For each dependency, try running its command (e.g., ",(0,t.jsx)(n.code,{children:"tesseract --version"}),") to verify it's accessible"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Common Issues:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If changes to PATH don't take effect, try:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Logging out and back in"}),"\n",(0,t.jsx)(n.li,{children:"Restarting your computer"}),"\n",(0,t.jsx)(n.li,{children:"Opening a new Command Prompt window"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"If a dependency isn't found, double-check the exact path in File Explorer"}),"\n",(0,t.jsx)(n.li,{children:"For Tesseract issues, verify the tessdata directory contains language files"}),"\n",(0,t.jsx)(n.li,{children:"For LibreOffice conversions, ensure no LibreOffice windows are open when converting"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Need help? Visit the ",(0,t.jsx)(n.a,{href:"https://github.com/Stirling-Tools/Stirling-PDF/issues",children:"Stirling PDF GitHub Issues"})," page."]})]})}function h(e={}){const{wrapper:n}={...(0,r.RP)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},5680:(e,n,i)=>{i.d(n,{RP:()=>d});var t=i(6540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var a=t.createContext({}),d=function(e){var n=t.useContext(a),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=d(i),u=r,f=p["".concat(a,".").concat(u)]||p[u]||c[u]||s;return i?t.createElement(f,l(l({ref:n},h),{},{components:i})):t.createElement(f,l({ref:n},h))}));h.displayName="MDXCreateElement"}}]);