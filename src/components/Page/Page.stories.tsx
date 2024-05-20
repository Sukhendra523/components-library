import Page from ".";

export default {
    title:"Components/Page",
    component: Page,
    parameters: {
        layout: "centered"
      },
      tags: ["autodocs"],

    argTypes: {
        title :{
            description:"This is Title of Page",
            control:{
                type:"text"
            }
        },
        children :{
            description:"This is children of Page",
            control:{
                type:"text"
            }
        }
    },

};



export const PageOne = {
    args: {
      title: "This is the Page One title",
      children: "These are the Page One children"
    }
  };
  
  export const PageTwo = {
    args: {
      title: "This is the Page Twoooooooooo title",
      children: "These are the Page Two children"
    }
  };