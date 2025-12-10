import React, { useEffect } from "react";
import Swal from "sweetalert2";
import useRole from "../../Hooks/Role/useRoll";
import useAuth from "../../Hooks/UseAuth/useAuth";

const SuspendModal = () => {

    const { role } = useRole()
    const { logOut } = useAuth()

    useEffect(() => {
        Swal.fire({
            title: "You are Suspended by Admin!",
            text: `Reason: ${role.reason}`,
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
            }
        });
    }, [])

    return null
};

export default SuspendModal;
