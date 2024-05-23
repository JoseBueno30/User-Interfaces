import React, { useEffect } from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./listModalStyle.css";

function esSoloEspacios(texto) {
  return /^\s*$/.test(texto);
}

function ListModal({ apiCall }) {
  const [listName, setListName] = useState("");
  const [listPublic, setListPublic] = useState(false);
  const [errorVisibility, setErrorVisibility] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);

  useEffect(() => {
    const modal = document.getElementById("listModal");
    modal.addEventListener("hidden.bs.modal", hideHandler);

    return () => {
      modal.removeEventListener("hidden.bs.modal", hideHandler);
    };
  },[]);

  const listNameChangeHandler = (e) => {
    setListName(e.target.value);
  };

  const listPublicChangeHandler = (e) => {
    setListPublic(e.target.checked);
  };

  const hideHandler = () => {
    setListName("");
    setListPublic(false);
    setErrorVisibility(false);
    setCanSubmit(true);
  }

  const executeCall = () => {
    if (listName === undefined || listName === "" || esSoloEspacios(listName)) {
      setErrorVisibility(true);
      return;
    }
    setCanSubmit(false);
    setErrorVisibility(false);
    apiCall(listName, listPublic)
      .then((id) => {
        window.location.href = "/listas/playlist?playlistId=" + id;
      })
      .catch((error) => {
        console.error(error);
        setCanSubmit(true);
      });
  };

  const clickHandler = (e) => {
    //Evita que el modal se cierre al hacer submit
    e.preventDefault();
    console.log("clickHandler");
    executeCall();
  };

  return (
    <div
      className="modal fade"
      id="listModal"
      tabIndex="-1"
      aria-labelledby="listModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="helpModalLabel">
              Crear nueva lista de reproducción
            </h1>
            <button
              type="button"
              className="close-button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <IoClose size={35} />
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={clickHandler}>
              <div className={"mb-3 w-75"}>
                <label htmlFor="inputName" className={"form-label"}>
                  Nombre de la lista *
                </label>
                <input
                  type="text"
                  className={
                    "form-control " + (errorVisibility ? "is-invalid" : "")
                  }
                  id="inputName"
                  onChange={listNameChangeHandler}
                  maxLength={20}
                  disabled={!canSubmit}
                />
                <p
                  className={"error-text " + (!errorVisibility ? "d-none" : "")}
                >
                  ❌El nombre de la lista no puede estar vacío.❌
                </p>
              </div>
              <div className="mb-4 w-75">
                <div className="form-check form-switch ps-0">
                  <label className="form-check-label mb-1">Privacidad</label>
                  <br />
                  <input
                    className="form-check-input ms-1"
                    type="checkbox"
                    role="switch"
                    id="listPublic"
                    onChange={listPublicChangeHandler}
                    checked={listPublic}
                  />
                  <label className="form-check-label ps-3" htmlFor="listPublic">
                    {listPublic ? "Pública" : "Privada"}
                  </label>
                  <br />
                </div>
              </div>
              <div className="mb-2 d-flex justify-content-start">
                <button type="submit" className="btn btn-primary" disabled={!canSubmit}>
                  Crear lista
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListModal;
