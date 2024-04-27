import { useContext, useState } from "react";
import { UseAllContext } from "../App";
import Laptop from "../assets/Images/photos/iMac.png";
import { useNavigate } from "react-router-dom";

const users = [
  { username: "Rondy", password: "user_1231" },
  { username: "Filli", password: "user_1232" },
  { username: "Darky", password: "user_1233" },
  { username: "Sandy", password: "user_1234" },
  { username: "Varian", password: "user_1235" },
  { username: "Otabek", password: "user_1236" },
  { username: "Rovshan", password: "user_1237" },
  { username: "Sarvar", password: "user_1238" },
  { username: "Sorra", password: "user_1239" },
  { username: "Gannibal", password: "user_1241" },
];

const Login = () => {
  const { activeLogin, setActiveLogin } = useContext(UseAllContext);
  const navigate = useNavigate();

  const [openpsw, setOpenpsw] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const usersJSON = JSON.stringify(users);
  localStorage.setItem("users", usersJSON);

  const handleLogin = (event) => {
    event.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const foundUser = storedUsers.find(
      (user) => user.username === username && user.password === password,
    );

    if (foundUser) {
      alert("Вы успешно авторизовались!");
      setActiveLogin({ user: username, psw: password });
      navigate("/");
    } else {
      setErrorMessage("Неверное имя пользователя или пароль");
    }
  };

  return (
    <div className="grid h-screen w-full grid-cols-2 justify-center bg-white">
      <div className="container col-span-1 bg-loginradial">
        <div className="flex h-full w-full items-center justify-center">
          <img src={Laptop} alt="mac laptop icon" />
        </div>
      </div>
      <div className="container col-span-1">
        <div className="items-left flex h-full flex-col justify-around">
          <form className="w-full" onSubmit={handleLogin}>
            <h2 className="mb-8 text-[36px] font-bold leading-[48px] text-[#001A49]">
              Вход в платформу
            </h2>
            <div className="mb-6">
              <label className="block">
                <p className="mb-2 text-[16px] font-semibold leading-6 text-[#48535B]">
                  Имя Пользователя <span className="text-orange-400">*</span>
                </p>
                <div className="flex items-center gap-2 rounded-lg border border-[#6E8BB74D] px-4 py-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8C15 7.20435 14.6839 6.44129 14.1213 5.87868C13.5587 5.31607 12.7956 5 12 5C11.2044 5 10.4413 5.31607 9.87868 5.87868C9.31607 6.44129 9 7.20435 9 8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11ZM5 20C5 19.0807 5.18106 18.1705 5.53284 17.3212C5.88463 16.4719 6.40024 15.7003 7.05025 15.0503C7.70026 14.4002 8.47194 13.8846 9.32122 13.5328C10.1705 13.1811 11.0807 13 12 13C12.9193 13 13.8295 13.1811 14.6788 13.5328C15.5281 13.8846 16.2997 14.4002 16.9497 15.0503C17.5998 15.7003 18.1154 16.4719 18.4672 17.3212C18.8189 18.1705 19 19.0807 19 20H5Z"
                      fill="#6E8BB7"
                    />
                  </svg>
                  <input
                    type="text"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    pattern="^(?!.* {2})[A-Za-z0-9_.@ ]{4,24}$"
                    title="Пароль должен содержать латинские буквы, цифры и следующие символы: _, ., @"
                    className="flex-grow leading-6 outline-none placeholder:text-[#9AA6AC]"
                    placeholder="Введите никнейм"
                  />
                </div>
              </label>
              <label className="my-5 block">
                <p className="mb-2 text-[16px] font-semibold leading-6 text-[#48535B]">
                  Пароль <span className="text-orange-400">*</span>
                </p>
                <div className="flex items-center gap-2 rounded-lg border border-[#6E8BB74D] px-4 py-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_6375_7495)">
                      <path
                        d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                        fill="white"
                      />
                      <path
                        d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                        fill="#6E8BB7"
                        fill-opacity="0.7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6375_7495">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <input
                    type={openpsw ? "password" : "text"}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={8}
                    pattern="[A-Za-z0-9_]{8,}"
                    title="Пароль может содержать только символы латиницы, цифры и знака нижнего подчёркивания!"
                    className="flex-grow leading-6 outline-none placeholder:text-[#9AA6AC]"
                    placeholder="Введите пароль"
                  />
                  <button
                    onClick={(event) => (
                      event.preventDefault(),
                      event.stopPropagation(),
                      setOpenpsw(!openpsw)
                    )}
                  >
                    {openpsw ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142Z"
                          fill="white"
                        />
                        <path
                          d="M13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142Z"
                          fill="#6E8BB7"
                          fill-opacity="0.7"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 5C7.52201 5 3.73201 7.943 2.45801 12C3.73201 16.057 7.52201 19 12 19C16.478 19 20.268 16.057 21.542 12C20.268 7.943 16.478 5 12 5ZM14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92173 8.42143 9.17158 9.17157C8.42143 9.92172 8.00001 10.9391 8.00001 12C8.00001 13.0609 8.42143 14.0783 9.17158 14.8284C9.92173 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 5C7.52201 5 3.73201 7.943 2.45801 12C3.73201 16.057 7.52201 19 12 19C16.478 19 20.268 16.057 21.542 12C20.268 7.943 16.478 5 12 5ZM14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92173 8.42143 9.17158 9.17157C8.42143 9.92172 8.00001 10.9391 8.00001 12C8.00001 13.0609 8.42143 14.0783 9.17158 14.8284C9.92173 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284Z"
                          fill="#6E8BB7"
                          fill-opacity="0.7"
                        />
                      </svg>
                    ) : (
                      <div className="h-6 w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          stroke-linejoin="round"
                          stroke-miterlimit="2"
                          clip-rule="evenodd"
                          viewBox="0 0 64 64"
                          id="Hide"
                        >
                          <rect width="64" height="64" fill="none"></rect>
                          <path
                            d="M568.687,32C571.83,39.211 581.07,58 592,58C596.706,58 601.092,54.436 604.807,49.893C605.768,48.717 606.989,49.454 607.532,51.537C608.074,53.62 607.734,56.265 606.773,57.44C602.492,62.675 597.422,66.667 592,66.667C576.826,66.667 564.463,34.772 564.463,34.772C563.846,33.166 563.846,30.834 564.463,29.228C564.463,29.228 576.826,-2.667 592,-2.667C607.174,-2.667 619.537,29.228 619.537,29.228C620.154,30.834 620.154,33.166 619.537,34.772C619.537,34.772 617.999,38.792 615.336,43.971C614.996,44.632 614.637,45.312 614.261,46.006C613.421,47.556 612.158,47.336 611.442,45.515C610.727,43.694 610.828,40.957 611.669,39.407C612.017,38.764 612.349,38.134 612.664,37.521C613.771,35.368 614.664,33.438 615.306,31.983C612.156,24.761 602.922,6 592,6C581.07,6 571.83,24.789 568.687,32Z"
                            transform="matrix(1 0 0 .46154 -560 17.23)"
                            fill="#6e8bb7"
                            class="color000000 svgShape"
                          ></path>
                          <path
                            d="M592,22C586.481,22 582,26.481 582,32C582,37.519 586.481,42 592,42C597.519,42 602,37.519 602,32C602,26.481 597.519,22 592,22ZM592,26C595.311,26 598,28.689 598,32C598,35.311 595.311,38 592,38C588.689,38 586,35.311 586,32C586,28.689 588.689,26 592,26Z"
                            transform="translate(-560)"
                            fill="#6e8bb7"
                            class="color000000 svgShape"
                          ></path>
                          <path
                            d="M648.824,15.82L692.824,51.82C693.716,52.55 694.968,52.328 695.617,51.323C696.267,50.319 696.069,48.911 695.176,48.18L651.176,12.18C650.284,11.45 649.032,11.672 648.383,12.677C647.733,13.681 647.931,15.089 648.824,15.82Z"
                            transform="matrix(1 0 0 .88889 -640 3.556)"
                            fill="#6e8bb7"
                            class="color000000 svgShape"
                          ></path>
                        </svg>
                      </div>
                    )}
                  </button>
                </div>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-[16px] font-medium leading-6 text-[#6E8BB7]">
                  Запомнить меня
                </p>
              </label>
            </div>
            {errorMessage && (
              <div className="mb-4 text-red-600">{errorMessage}</div>
            )}
            <button className="w-full rounded-lg bg-[#0067F4] py-3 text-[16px] font-semibold leading-8 text-white">
              Войти
            </button>
          </form>
          <div>
            <p className="text-[16px] font-medium leading-6 text-[#6E8BB7]">
              Copyright ©Girgitton. Все права защищены
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
