function handleInfo() {
  function openTaskDetails() {
    const infoIcons = document.querySelectorAll(".infoIcon");
    infoIcons.forEach((infoIcon) => {
      infoIcon.addEventListener("click", (event) => {
        const taskCardDetailsContainer =
          event.target.closest(".taskCardContainer").nextElementSibling;
        taskCardDetailsContainer.style.display = "block";
      });
    });
  }

  function closeTaskDetails() {
    const closeTaskDetailsBtns = document.querySelectorAll(
      ".closeTaskDetailsBtn"
    );
    closeTaskDetailsBtns.forEach((closeTaskDetailsBtn) => {
      closeTaskDetailsBtn.addEventListener("click", () => {
        const taskCardDetailsContainer = closeTaskDetailsBtn.closest(
          ".taskCardDetailsContainer"
        );
        taskCardDetailsContainer.style.display = "none";
      });
    });
  }
  return { openTaskDetails, closeTaskDetails };
}

export default handleInfo;
