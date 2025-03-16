function changeHandler(event) {
  console.log(event.target.value);
  let value = event.target.value;
  //when ever user enter value as 10, then fire the custom event
  if (value == 10) {
    //step 1. create custom event
    const myEvent = new CustomEvent("valueten", {
      detail: {
        message: "User have entered value 10",
      },
    });
    //step 2.dispatch the event
    document.dispatchEvent(myEvent);
  }
}

//Step 3: handle the event
document.addEventListener("valueten", (event) => {
  console.log("Access Event Data", event.detail.message);
});
