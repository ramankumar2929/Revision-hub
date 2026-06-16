 
 import { useEffect,useState } from "react";
 



 function Home({ setactivesec }) {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  const totalExpense = expenses.reduce((sum, expense) => {
    return sum + Number(expense.amount);
  }, 0);

  return (
    <>
      <section className="home-hero">
        <h1>Welcome back Raman 👋</h1>
        <p>Your personal productivity dashboard. Build. Learn. Repeat.</p>
      </section>

      <section className="home-stats">
        <div className="stat-card">
          <h3>✅ Todos</h3>
          <p>{todos.length}</p>
        </div>

        <div className="stat-card">
          <h3>📋 Notes</h3>
          <p>{notes.length}</p>
        </div>

        <div className="stat-card">
          <h3>💰 Expenses</h3>
          <p>₹{totalExpense}</p>
        </div>
      </section>

      <section className="quick-actions">
        <h2>Quick Actions</h2>

        <div className="action-buttons">
          <button onClick={() => setactivesec("todos")}>+ Add Todo</button>
          <button onClick={() => setactivesec("notes")}>+ Add Note</button>
          <button onClick={() => setactivesec("expenses")}>+ Add Expense</button>
        </div>
      </section>

      <section className="recent-grid">
        <div className="recent-card">
          <h2>Recent Todos</h2>

          {todos.length === 0 ? (
            <p>No todos yet.</p>
          ) : (
            todos.slice(-3).map((todo, index) => (
              <div className="recent-item" key={index}>
                <span>{todo.completed ? "✅" : "⭕"}</span>
                <p>{todo.text}</p>
              </div>
            ))
          )}
        </div>

        <div className="recent-card">
          <h2>Recent Notes</h2>

          {notes.length === 0 ? (
            <p>No notes yet.</p>
          ) : (
            notes.slice(-3).map((note, index) => (
              <div className="recent-item" key={index}>
                <span>📌</span>
                <p>{note.text}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Home;