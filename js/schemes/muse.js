window.addEventListener("DOMContentLoaded",()=>{var e="right"===CONFIG.sidebar.position,i=CONFIG.sidebar.width||320,t={},s={lines:document.querySelector(".sidebar-toggle"),init:function(){this.lines.classList.remove("toggle-arrow","toggle-close")},arrow:function(){this.lines.classList.remove("toggle-close"),this.lines.classList.add("toggle-arrow")},close:function(){this.lines.classList.remove("toggle-arrow"),this.lines.classList.add("toggle-close")}};function n(){var e=document.querySelector(".footer"),i=document.querySelector(".header").offsetHeight+document.querySelector(".main").offsetHeight+e.offsetHeight;e.classList.toggle("footer-fixed",i<=window.innerHeight)}({sidebarEl:document.querySelector(".sidebar"),isSidebarVisible:!1,init:function(){s.init(),window.addEventListener("mousedown",this.mousedownHandler.bind(this)),window.addEventListener("mouseup",this.mouseupHandler.bind(this)),document.querySelector("#sidebar-dimmer").addEventListener("click",this.clickHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("click",this.clickHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("mouseenter",this.mouseEnterHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("mouseleave",this.mouseLeaveHandler.bind(this)),window.addEventListener("sidebar:show",this.showSidebar.bind(this)),window.addEventListener("sidebar:hide",this.hideSidebar.bind(this))},mousedownHandler:function(e){t.X=e.pageX,t.Y=e.pageY},mouseupHandler:function(e){var i=e.pageX-t.X,s=e.pageY-t.Y,n=Math.sqrt(i*i+s*s)<20&&e.target.matches(".main");this.isSidebarVisible&&(n||e.target.matches("img.medium-zoom-image, .fancybox img"))&&this.hideSidebar()},clickHandler:function(){this.isSidebarVisible?this.hideSidebar():this.showSidebar()},mouseEnterHandler:function(){this.isSidebarVisible||s.arrow()},mouseLeaveHandler:function(){this.isSidebarVisible||s.init()},showSidebar:function(){this.isSidebarVisible=!0,this.sidebarEl.classList.add("sidebar-active"),"function"==typeof Velocity&&Velocity(document.querySelectorAll(".sidebar .motion-element"),e?"transition.slideRightIn":"transition.slideLeftIn",{stagger:50,drag:!0}),s.close(),NexT.utils.isDesktop()&&window.anime(Object.assign({targets:document.body,duration:200,easing:"linear"},e?{"padding-right":i}:{"padding-left":i}))},hideSidebar:function(){this.isSidebarVisible=!1,this.sidebarEl.classList.remove("sidebar-active"),s.init(),NexT.utils.isDesktop()&&window.anime(Object.assign({targets:document.body,duration:200,easing:"linear"},e?{"padding-right":0}:{"padding-left":0}))}}).init(),n(),window.addEventListener("resize",n),window.addEventListener("scroll",n)});