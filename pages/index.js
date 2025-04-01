          <div
            key={unit.name}
            style={{
              backgroundColor: "#f4f4f4",
              borderRadius: "12px",
              padding: "1rem",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h2>{unit.name}</h2>
            <p><strong>Sales:</strong> ${unit.sales.toLocaleString()}</p>
            <p><strong>Team Size:</strong> {unit.teamSize}</p>
            <p><strong>Sales per Staff:</strong> ${(unit.sales / unit.teamSize).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
