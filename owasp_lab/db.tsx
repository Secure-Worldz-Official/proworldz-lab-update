import React from 'react';

export default function Component() {
  return (
    <>
<div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '50px' }}><h2>Lab DB Connection Error</h2><p>" . $con->connect_error . "</p></div>");
}

$con->set_charset("utf8mb4");

// Alias so legacy code using $db or $pdo variable names still works
// (these are mysqli objects, NOT PDO — all queries must use mysqli syntax)
$db = $con;

    </>
  );
}
