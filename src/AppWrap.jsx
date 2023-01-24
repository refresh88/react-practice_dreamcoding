import React, { useState } from 'react';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avartar
          image='data:image/png;base64,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'
          name='Bob'
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>
      <Navbar>
        <p>하이</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
}

function Avartar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}