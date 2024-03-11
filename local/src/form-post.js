import React from "react";

export default function FormPost() {
  let [PostData, setPostData] = React.useState("");
  const form = React.useRef();

  const onSubmitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const formEnt = Object.fromEntries(formData.entries());
    fetch("/api/form-post", {
      method: "POST",
      body: JSON.stringify(formEnt),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.text())
      .then((result) => setPostData(result))
      .catch((err) => alert(err));
  };

  const inputStyle = {
    margin: "5px 0",
   justifyContent:"center" 
  };

  return (
    <div style={{ margin: "30px", }}>
      <form ref={form} onSubmit={onSubmitForm}>
        <div style={inputStyle}>ติดต่อเรา</div>
        <input
          type="text"
          name="name"
          size="43"
          placeholder="ชื่อ"
          style={inputStyle}
        />
        <br />
        <input
          type="email"
          name="email"
          size="43"
          placeholder="อีเมล"
          style={inputStyle}
        />
        <br />
        <textarea
          name="message"
          cols="40"
          rows="4"
          placeholder="ข้อความ"
          style={inputStyle}
        ></textarea>
        <br />
        <button>ตกลง</button>
      </form>
      <br />

      {/* Center-align the response HTML */}
      <div style={{ textAlign: "center" }}>
        <div dangerouslySetInnerHTML={{ __html: PostData }}></div>
      </div>
    </div>
  );
}
