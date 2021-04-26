package authv1

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

type TokenHandler func(echo.Context) error

type MakeJWTAuthHandlerDeps struct {
	Login    string `json:"login"`
	Password string `json:"password"`
}

func makeJWTAuthHandler() TokenHandler {
	return func(c echo.Context) error {

		return c.JSON(http.StatusOK, "test echo handler")
	}
}
