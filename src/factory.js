function handleFactory() {
  function taskFactory(id, title, note, date, priority, project) {
    return {
      id: id,
      title: title,
      note: note,
      date: date,
      priority: priority,
      project: project,
    };
  }

  return { taskFactory };
}

export default handleFactory;
