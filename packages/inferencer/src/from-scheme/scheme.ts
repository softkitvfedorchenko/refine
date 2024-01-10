export default {
	"openapi": "3.0.0",
	"paths": {
		"/api/platform/v1/auth/signup": {
			"post": {
				"operationId": "AuthController_signUp",
				"parameters": [],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/SignUpByEmailRequest"
							}
						}
					}
				},
				"responses": {
					"201": {
						"description": "",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/SignUpByEmailResponseDTO"
								}
							}
						}
					},
					"409": {
						"description": "Appears when user with such email already exists",
						"content": {
							"application/json": {
								"schema": {
									"allOf": [
										{
											"$ref": "#/components/schemas/ErrorResponse"
										},
										{
											"properties": {
												"status": {
													"type": "number",
													"default": 409
												}
											}
										}
									]
								}
							}
						}
					}
				},
				"tags": [
					"Auth"
				]
			}
		},
		"/api/platform/v1/auth/tenant-signup": {
			"post": {
				"operationId": "AuthController_signUpWithTenantCreation",
				"parameters": [],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/SignUpByEmailWithTenantCreationRequest"
							}
						}
					}
				},
				"responses": {
					"201": {
						"description": "",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/SignUpByEmailResponseDTO"
								}
							}
						}
					},
					"409": {
						"description": "Appears when user with such email already exists",
						"content": {
							"application/json": {
								"schema": {
									"allOf": [
										{
											"$ref": "#/components/schemas/ErrorResponse"
										},
										{
											"properties": {
												"status": {
													"type": "number",
													"default": 409
												}
											}
										}
									]
								}
							}
						}
					}
				},
				"tags": [
					"Auth"
				]
			}
		},
		"/api/platform/v1/auth/approve-signup": {
			"post": {
				"operationId": "AuthController_approveSignup",
				"summary": "",
				"description": "or you can respond with some message and let user to login\n    default behavior is to force user to login and make sure his password is correct",
				"parameters": [],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApproveSignUpRequest"
							}
						}
					}
				},
				"responses": {
					"200": {
						"description": ""
					}
				},
				"tags": [
					"Auth"
				]
			}
		},
		"/api/platform/v1/auth/signin": {
			"post": {
				"operationId": "AuthController_signIn",
				"parameters": [],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/SignInRequest"
							}
						}
					}
				},
				"responses": {
					"200": {
						"description": "",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/SignInResponseDTO"
								}
							}
						}
					}
				},
				"tags": [
					"Auth"
				]
			}
		},
		"/api/platform/v1/auth/sso/saml/login": {
			"post": {
				"operationId": "AuthController_samlLogin",
				"parameters": [],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/InitiateSamlLoginRequest"
							}
						}
					}
				},
				"responses": {
					"200": {
						"description": ""
					}
				},
				"tags": [
					"Auth"
				]
			}
		},
		"/api/platform/v1/auth/sso/saml/ac": {
			"post": {
				"operationId": "AuthController_samlAcknowledge",
				"parameters": [],
				"responses": {
					"200": {
						"description": ""
					}
				},
				"tags": [
					"Auth"
				]
			}
		},
		"/api/platform/v1/auth/refresh-access-token": {
			"post": {
				"operationId": "AuthController_refreshAccessToken",
				"parameters": [],
				"responses": {
					"200": {
						"description": ""
					}
				},
				"tags": [
					"Auth"
				]
			}
		},
		"/api/platform/v1/auth/saml/sso/metadata": {
			"get": {
				"operationId": "SamlController_samlMetadata",
				"parameters": [
					{
						"name": "samlConfigurationId",
						"required": true,
						"in": "query",
						"schema": {
							"type": "string"
						}
					},
					{
						"name": "tenantId",
						"required": true,
						"in": "query",
						"schema": {
							"type": "string"
						}
					}
				],
				"responses": {
					"200": {
						"description": ""
					}
				},
				"tags": [
					"Auth"
				]
			}
		},
		"/api/platform/v1/roles": {
			"get": {
				"operationId": "RolesController_findAll",
				"parameters": [
					{
						"name": "page",
						"required": false,
						"in": "query",
						"description": "Page number to retrieve.If you provide invalid value the default page number will applied\n        <p>\n             <b>Example: </b> 1\n          </p>\n        <p>\n             <b>Default Value: </b> 1\n          </p>\n        ",
						"schema": {
							"type": "number"
						}
					},
					{
						"name": "limit",
						"required": false,
						"in": "query",
						"description": "Number of records per page.\n      <p>\n             <b>Example: </b> 20\n          </p>\n      <p>\n             <b>Default Value: </b> 50\n          </p>\n      <p>\n             <b>Max Value: </b> 100\n          </p>\n\n      If provided value is greater than max value, max value will be applied.\n      ",
						"schema": {
							"type": "number"
						}
					},
					{
						"name": "filter.id",
						"required": false,
						"in": "query",
						"description": "Filter by id query param.\n          <p>\n             <b>Format: </b> filter.id={$not}:OPERATION:VALUE\n          </p>\n          <p>\n             <b>Example: </b> filter.id=$not:$like:John Doe&filter.id=like:John\n          </p>\n          <h4>Available Operations</h4><ul><li>$eq</li>\n<li>$in</li></ul>",
						"schema": {
							"type": "array",
							"items": {
								"type": "string"
							}
						}
					},
					{
						"name": "filter.name",
						"required": false,
						"in": "query",
						"description": "Filter by name query param.\n          <p>\n             <b>Format: </b> filter.name={$not}:OPERATION:VALUE\n          </p>\n          <p>\n             <b>Example: </b> filter.name=$not:$like:John Doe&filter.name=like:John\n          </p>\n          <h4>Available Operations</h4><ul><li>$contains</li></ul>",
						"schema": {
							"type": "array",
							"items": {
								"type": "string"
							}
						}
					},
					{
						"name": "sortBy",
						"required": false,
						"in": "query",
						"description": "Parameter to sort by.\n      <p>To sort by multiple fields, just provide query param multiple types. The order in url defines an order of sorting</p>\n      <p>\n             <b>Format: </b> fieldName:DIRECTION\n          </p>\n      <p>\n             <b>Example: </b> sortBy=id:DESC&sortBy=createdAt:ASC\n          </p>\n      <p>\n             <b>Default Value: </b> createdAt:DESC,id:DESC\n          </p>\n      <h4>Available Fields</h4><ul><li>id</li>\n<li>name</li>\n<li>createdAt</li>\n<li>updatedAt</li></ul>\n      ",
						"schema": {
							"type": "array",
							"items": {
								"type": "string",
								"enum": [
									"id:ASC",
									"id:DESC",
									"name:ASC",
									"name:DESC",
									"createdAt:ASC",
									"createdAt:DESC",
									"updatedAt:ASC",
									"updatedAt:DESC"
								]
							}
						}
					},
					{
						"name": "search",
						"required": false,
						"in": "query",
						"description": "Search term to filter result values\n        <p>\n             <b>Example: </b> John\n          </p>\n        <p>\n             <b>Default Value: </b> No default value\n          </p>\n        ",
						"schema": {
							"type": "string"
						}
					},
					{
						"name": "searchBy",
						"required": false,
						"in": "query",
						"description": "List of fields to search by term to filter result values\n        <p>\n             <b>Example: </b> name,roleType\n          </p>\n        <p>\n             <b>Default Value: </b> By default all fields mentioned below will be used to search by term\n          </p>\n        <h4>Available Fields</h4><ul><li>name</li>\n<li>roleType</li></ul>\n        ",
						"schema": {
							"type": "string"
						}
					}
				],
				"responses": {
					"200": {
						"description": "",
						"content": {
							"application/json": {
								"schema": {
									"allOf": [
										{
											"$ref": "#/components/schemas/PaginatedDocumented"
										},
										{
											"properties": {
												"data": {
													"type": "array",
													"items": {
														"$ref": "#/components/schemas/UserRoleWithoutPermission"
													}
												},
												"meta": {
													"properties": {
														"select": {
															"type": "array",
															"items": {
																"type": "string"
															}
														},
														"filter": {
															"type": "object",
															"properties": {
																"id": {
																	"oneOf": [
																		{
																			"type": "string"
																		},
																		{
																			"type": "array",
																			"items": {
																				"type": "string"
																			}
																		}
																	]
																},
																"name": {
																	"oneOf": [
																		{
																			"type": "string"
																		},
																		{
																			"type": "array",
																			"items": {
																				"type": "string"
																			}
																		}
																	]
																}
															}
														}
													}
												}
											}
										}
									]
								}
							}
						}
					}
				},
				"tags": [
					"Roles"
				],
				"security": [
					{
						"bearer": []
					}
				]
			},
			"post": {
				"operationId": "RolesController_create",
				"parameters": [],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/CreateUserRole"
							}
						}
					}
				},
				"responses": {
					"201": {
						"description": "",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/UserRoleWithoutPermission"
								}
							}
						}
					}
				},
				"tags": [
					"Roles"
				],
				"security": [
					{
						"bearer": []
					}
				]
			}
		},
		"/api/platform/v1/roles/{id}": {
			"get": {
				"operationId": "RolesController_findOne",
				"parameters": [
					{
						"name": "id",
						"required": true,
						"in": "path",
						"description": "Entity id, uuid v4 format",
						"example": "123e4567-e89b-12d3-a456-426614174000",
						"schema": {
							"type": "string"
						}
					}
				],
				"responses": {
					"200": {
						"description": "",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/UserRoleWithoutPermission"
								}
							}
						}
					}
				},
				"tags": [
					"Roles"
				],
				"security": [
					{
						"bearer": []
					}
				]
			},
			"put": {
				"operationId": "RolesController_updateOne",
				"parameters": [
					{
						"name": "id",
						"required": true,
						"in": "path",
						"description": "Entity id, uuid v4 format",
						"example": "123e4567-e89b-12d3-a456-426614174000",
						"schema": {
							"type": "string"
						}
					}
				],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/UpdateUserRole"
							}
						}
					}
				},
				"responses": {
					"200": {
						"description": "",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/UserRoleWithoutPermission"
								}
							}
						}
					}
				},
				"tags": [
					"Roles"
				],
				"security": [
					{
						"bearer": []
					}
				]
			},
			"delete": {
				"operationId": "RolesController_softDelete",
				"parameters": [
					{
						"name": "id",
						"required": true,
						"in": "path",
						"description": "Entity id, uuid v4 format",
						"example": "123e4567-e89b-12d3-a456-426614174000",
						"schema": {
							"type": "string"
						}
					},
					{
						"name": "version",
						"required": true,
						"in": "query",
						"description": "Version number of entity",
						"example": "1",
						"schema": {
							"minimum": 0,
							"type": "number"
						}
					}
				],
				"responses": {
					"204": {
						"description": ""
					}
				},
				"tags": [
					"Roles"
				],
				"security": [
					{
						"bearer": []
					}
				]
			}
		},
		"/api/platform/v1/tenants/configuration/saml": {
			"post": {
				"operationId": "TenantsConfigurationController_setupSaml",
				"parameters": [],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/SetupSamlConfiguration"
							}
						}
					}
				},
				"responses": {
					"200": {
						"description": "",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/SetupSamlConfigurationResponseDTO"
								}
							}
						}
					}
				},
				"tags": [
					"Tenants"
				]
			}
		},
		"/api/platform/health": {
			"get": {
				"operationId": "HealthController_getHealth",
				"parameters": [],
				"responses": {
					"200": {
						"description": "The Health Check is successful",
						"content": {
							"application/json": {
								"schema": {
									"type": "object",
									"properties": {
										"status": {
											"type": "string",
											"example": "ok"
										},
										"info": {
											"type": "object",
											"example": {
												"database": {
													"status": "up"
												}
											},
											"additionalProperties": {
												"type": "object",
												"properties": {
													"status": {
														"type": "string"
													}
												},
												"additionalProperties": {
													"type": "string"
												}
											},
											"nullable": true
										},
										"error": {
											"type": "object",
											"example": {},
											"additionalProperties": {
												"type": "object",
												"properties": {
													"status": {
														"type": "string"
													}
												},
												"additionalProperties": {
													"type": "string"
												}
											},
											"nullable": true
										},
										"details": {
											"type": "object",
											"example": {
												"database": {
													"status": "up"
												}
											},
											"additionalProperties": {
												"type": "object",
												"properties": {
													"status": {
														"type": "string"
													}
												},
												"additionalProperties": {
													"type": "string"
												}
											}
										}
									}
								}
							}
						}
					},
					"503": {
						"description": "The Health Check is not successful",
						"content": {
							"application/json": {
								"schema": {
									"type": "object",
									"properties": {
										"status": {
											"type": "string",
											"example": "error"
										},
										"info": {
											"type": "object",
											"example": {
												"database": {
													"status": "up"
												}
											},
											"additionalProperties": {
												"type": "object",
												"properties": {
													"status": {
														"type": "string"
													}
												},
												"additionalProperties": {
													"type": "string"
												}
											},
											"nullable": true
										},
										"error": {
											"type": "object",
											"example": {
												"redis": {
													"status": "down",
													"message": "Could not connect"
												}
											},
											"additionalProperties": {
												"type": "object",
												"properties": {
													"status": {
														"type": "string"
													}
												},
												"additionalProperties": {
													"type": "string"
												}
											},
											"nullable": true
										},
										"details": {
											"type": "object",
											"example": {
												"database": {
													"status": "up"
												},
												"redis": {
													"status": "down",
													"message": "Could not connect"
												}
											},
											"additionalProperties": {
												"type": "object",
												"properties": {
													"status": {
														"type": "string"
													}
												},
												"additionalProperties": {
													"type": "string"
												}
											}
										}
									}
								}
							}
						}
					}
				},
				"tags": [
					"Health"
				]
			}
		}
	},
	"info": {
		"title": "Platform Application is responsible for the common things, like user, tenants, auth, management.",
		"description": "It has a common api for tenants and auth. By default designed as a multi-tenant, but you can have only one tenant and manage it like this, in case if in future you would like to expand.",
		"version": "1.0.0",
		"contact": {
			"name": "Vitalii Samofal",
			"url": "https://www.softkit.dev/",
			"email": "vitalii.samofal@softkit.dev"
		}
	},
	"tags": [],
	"servers": [
		{
			"url": "http://localhost:9999",
			"description": "local server"
		}
	],
	"components": {
		"securitySchemes": {
			"bearer": {
				"scheme": "bearer",
				"bearerFormat": "JWT",
				"type": "http"
			}
		},
		"schemas": {
			"ErrorResponse": {
				"type": "object",
				"properties": {
					"type": {
						"type": "string",
						"description": "link to the docs with more details about the error"
					},
					"title": {
						"type": "string",
						"description": "title of the error, short description"
					},
					"status": {
						"type": "number",
						"description": "http status code of the error, e.g. 404"
					},
					"detail": {
						"type": "string",
						"description": "detail of the error, comprehensive message for the end user (e.g. 'customer with id 12344321 not found')"
					},
					"data": {
						"type": "object",
						"description": "additional data that can be used by the client to handle the error"
					},
					"instance": {
						"type": "string",
						"description": "error instance, unique identifier for this particular occurrence of the problem"
					},
					"errorCode": {
						"type": "string",
						"description": "A code that uniquely identifies the type of error or problem that occurred"
					}
				},
				"required": [
					"type",
					"title",
					"status",
					"detail",
					"data",
					"instance",
					"errorCode"
				]
			},
			"SignUpByEmailRequest": {
				"type": "object",
				"properties": {
					"repeatedPassword": {
						"type": "string",
						"description": "just in case of some issues with frontend,\nwe won't save garbage to the database"
					},
					"email": {
						"type": "string"
					},
					"password": {
						"type": "string"
					},
					"firstName": {
						"type": "string"
					},
					"lastName": {
						"type": "string"
					}
				},
				"required": [
					"repeatedPassword",
					"email",
					"firstName",
					"lastName"
				]
			},
			"SignUpByEmailResponseDTO": {
				"type": "object",
				"properties": {
					"message": {
						"type": "string"
					},
					"approvalId": {
						"type": "string",
						"description": "id of approval entity, for future reuse"
					}
				},
				"required": [
					"message",
					"approvalId"
				]
			},
			"SignUpByEmailWithTenantCreationRequest": {
				"type": "object",
				"properties": {
					"companyName": {
						"type": "string"
					},
					"companyIdentifier": {
						"type": "string"
					},
					"repeatedPassword": {
						"type": "string",
						"description": "just in case of some issues with frontend,\nwe won't save garbage to the database"
					},
					"email": {
						"type": "string"
					},
					"password": {
						"type": "string"
					},
					"firstName": {
						"type": "string"
					},
					"lastName": {
						"type": "string"
					}
				},
				"required": [
					"companyName",
					"companyIdentifier",
					"repeatedPassword",
					"email",
					"firstName",
					"lastName"
				]
			},
			"ApproveSignUpRequest": {
				"type": "object",
				"properties": {
					"id": {
						"type": "string"
					},
					"code": {
						"type": "string"
					}
				},
				"required": [
					"id",
					"code"
				]
			},
			"SignInRequest": {
				"type": "object",
				"properties": {
					"email": {
						"type": "string"
					},
					"password": {
						"type": "string"
					}
				},
				"required": [
					"email"
				]
			},
			"SignInResponseDTO": {
				"type": "object",
				"properties": {
					"message": {
						"type": "string"
					},
					"accessToken": {
						"type": "string"
					},
					"refreshToken": {
						"type": "string"
					}
				},
				"required": [
					"message",
					"accessToken",
					"refreshToken"
				]
			},
			"InitiateSamlLoginRequest": {
				"type": "object",
				"properties": {
					"redirectUrl": {
						"type": "string"
					},
					"samlConfigurationId": {
						"type": "string"
					}
				},
				"required": [
					"redirectUrl",
					"samlConfigurationId"
				]
			},
			"PaginatedMetaDocumented": {
				"type": "object",
				"properties": {
					"itemsPerPage": {
						"type": "number",
						"title": "Number of items per page"
					},
					"totalItems": {
						"type": "number",
						"title": "Total number of items"
					},
					"currentPage": {
						"type": "number",
						"title": "Current requested page"
					},
					"totalPages": {
						"type": "number",
						"title": "Total number of pages"
					},
					"sortBy": {
						"type": "array",
						"title": "Sorting by columns",
						"items": {
							"type": "array",
							"items": {
								"oneOf": [
									{
										"type": "string"
									},
									{
										"type": "string",
										"enum": [
											"ASC",
											"DESC"
										]
									}
								]
							}
						}
					},
					"searchBy": {
						"title": "Search by fields",
						"type": "array",
						"items": {
							"type": "string"
						}
					},
					"search": {
						"type": "string",
						"title": "Search term"
					},
					"select": {
						"title": "List of selected fields",
						"type": "array",
						"items": {
							"type": "string"
						}
					},
					"filter": {
						"type": "object",
						"title": "Filters that applied to the query"
					}
				},
				"required": [
					"itemsPerPage",
					"totalItems",
					"currentPage",
					"totalPages"
				]
			},
			"PaginatedLinksDocumented": {
				"type": "object",
				"properties": {
					"first": {
						"type": "string",
						"title": "Link to first page"
					},
					"previous": {
						"type": "string",
						"title": "Link to previous page"
					},
					"current": {
						"type": "string",
						"title": "Link to current page"
					},
					"next": {
						"type": "string",
						"title": "Link to next page"
					},
					"last": {
						"type": "string",
						"title": "Link to last page"
					}
				}
			},
			"PaginatedDocumented": {
				"type": "object",
				"properties": {
					"data": {
						"title": "Array of entities",
						"type": "array",
						"items": {
							"type": "object"
						}
					},
					"meta": {
						"title": "Pagination Metadata",
						"allOf": [
							{
								"$ref": "#/components/schemas/PaginatedMetaDocumented"
							}
						]
					},
					"links": {
						"title": "Links to pages",
						"allOf": [
							{
								"$ref": "#/components/schemas/PaginatedLinksDocumented"
							}
						]
					}
				},
				"required": [
					"data",
					"meta",
					"links"
				]
			},
			"UserRoleWithoutPermission": {
				"type": "object",
				"properties": {
					"createdAt": {
						"format": "date-time",
						"type": "string",
						"description": "Created at date time in ISO format"
					},
					"updatedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Last time updated at date time in ISO format"
					},
					"deletedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Deleted at date time in ISO format"
					},
					"version": {
						"type": "string",
						"description": "Entity version for optimistic lock handling"
					},
					"id": {
						"type": "string"
					},
					"name": {
						"type": "string"
					},
					"description": {
						"type": "string"
					},
					"roleType": {
						"enum": [
							"SUPER_ADMIN",
							"ADMIN",
							"REGULAR_USER"
						],
						"type": "string"
					},
					"tenantId": {
						"type": "string"
					}
				},
				"required": [
					"createdAt",
					"updatedAt",
					"deletedAt",
					"version",
					"id",
					"name",
					"description"
				]
			},
			"CreateUserRole": {
				"type": "object",
				"properties": {
					"name": {
						"type": "string"
					},
					"description": {
						"type": "string"
					}
				},
				"required": [
					"name",
					"description"
				]
			},
			"PermissionCategory": {
				"type": "object",
				"properties": {
					"createdAt": {
						"format": "date-time",
						"type": "string",
						"description": "Created at date time in ISO format"
					},
					"updatedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Last time updated at date time in ISO format"
					},
					"deletedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Deleted at date time in ISO format"
					},
					"version": {
						"type": "string",
						"description": "Entity version for optimistic lock handling"
					},
					"id": {
						"type": "string"
					},
					"name": {
						"type": "string"
					},
					"description": {
						"type": "string"
					},
					"permissions": {
						"type": "array",
						"items": {
							"$ref": "#/components/schemas/Permission"
						}
					}
				},
				"required": [
					"createdAt",
					"updatedAt",
					"deletedAt",
					"version",
					"id",
					"name",
					"description",
					"permissions"
				]
			},
			"Permission": {
				"type": "object",
				"properties": {
					"createdAt": {
						"format": "date-time",
						"type": "string",
						"description": "Created at date time in ISO format"
					},
					"updatedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Last time updated at date time in ISO format"
					},
					"deletedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Deleted at date time in ISO format"
					},
					"version": {
						"type": "string",
						"description": "Entity version for optimistic lock handling"
					},
					"id": {
						"type": "string"
					},
					"name": {
						"type": "string"
					},
					"description": {
						"type": "string"
					},
					"action": {
						"type": "string",
						"description": "action is the identifier of the permission\nusually it is the name of the permission in lowercase\ne.g. ADMIN.USER.CREATE, ADMIN.USER.READ, ADMIN.USER.UPDATE, ADMIN.USER.DELETE, ADMIN.USER.BULK_UPLOAD"
					},
					"permissionCategoryId": {
						"type": "string"
					},
					"permissionCategory": {
						"nullable": true,
						"allOf": [
							{
								"$ref": "#/components/schemas/PermissionCategory"
							}
						]
					}
				},
				"required": [
					"createdAt",
					"updatedAt",
					"deletedAt",
					"version",
					"id",
					"name",
					"action",
					"permissionCategoryId",
					"permissionCategory"
				]
			},
			"UserRole": {
				"type": "object",
				"properties": {
					"createdAt": {
						"format": "date-time",
						"type": "string",
						"description": "Created at date time in ISO format"
					},
					"updatedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Last time updated at date time in ISO format"
					},
					"deletedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Deleted at date time in ISO format"
					},
					"version": {
						"type": "string",
						"description": "Entity version for optimistic lock handling"
					},
					"id": {
						"type": "string"
					},
					"name": {
						"type": "string"
					},
					"description": {
						"type": "string"
					},
					"roleType": {
						"type": "string",
						"enum": [
							"SUPER_ADMIN",
							"ADMIN",
							"REGULAR_USER"
						]
					},
					"permissions": {
						"type": "array",
						"items": {
							"$ref": "#/components/schemas/Permission"
						}
					},
					"tenantId": {
						"type": "string"
					},
					"tenant": {
						"nullable": true,
						"description": "Tenants can have their own roles, but they can also inherit roles from the platform.",
						"allOf": [
							{
								"$ref": "#/components/schemas/Tenant"
							}
						]
					}
				},
				"required": [
					"createdAt",
					"updatedAt",
					"deletedAt",
					"version",
					"id",
					"name",
					"description"
				]
			},
			"UserTenantAccount": {
				"type": "object",
				"properties": {
					"createdAt": {
						"format": "date-time",
						"type": "string",
						"description": "Created at date time in ISO format"
					},
					"updatedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Last time updated at date time in ISO format"
					},
					"deletedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Deleted at date time in ISO format"
					},
					"version": {
						"type": "string",
						"description": "Entity version for optimistic lock handling"
					},
					"tenantId": {
						"type": "string",
						"description": "Tenant identifier"
					},
					"id": {
						"type": "string"
					},
					"userProfileId": {
						"type": "string"
					},
					"userStatus": {
						"type": "string",
						"enum": [
							"ACTIVE",
							"DEACTIVATED"
						]
					},
					"roles": {
						"type": "array",
						"items": {
							"$ref": "#/components/schemas/UserRole"
						}
					},
					"userProfile": {
						"$ref": "#/components/schemas/UserProfile"
					},
					"tenant": {
						"$ref": "#/components/schemas/Tenant"
					}
				},
				"required": [
					"createdAt",
					"updatedAt",
					"deletedAt",
					"version",
					"tenantId",
					"id",
					"userProfileId",
					"userStatus"
				]
			},
			"UserProfile": {
				"type": "object",
				"properties": {
					"createdAt": {
						"format": "date-time",
						"type": "string",
						"description": "Created at date time in ISO format"
					},
					"updatedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Last time updated at date time in ISO format"
					},
					"deletedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Deleted at date time in ISO format"
					},
					"version": {
						"type": "string",
						"description": "Entity version for optimistic lock handling"
					},
					"id": {
						"type": "string"
					},
					"email": {
						"type": "string"
					},
					"password": {
						"type": "string"
					},
					"firstName": {
						"type": "string"
					},
					"lastName": {
						"type": "string"
					},
					"status": {
						"type": "string",
						"enum": [
							"ACTIVE",
							"WAITING_FOR_EMAIL_APPROVAL",
							"DEACTIVATED"
						]
					},
					"userTenantsAccounts": {
						"type": "array",
						"items": {
							"$ref": "#/components/schemas/UserTenantAccount"
						}
					}
				},
				"required": [
					"createdAt",
					"updatedAt",
					"deletedAt",
					"version",
					"id",
					"email",
					"firstName",
					"lastName",
					"status"
				]
			},
			"SAMLConfiguration": {
				"type": "object",
				"properties": {
					"createdAt": {
						"format": "date-time",
						"type": "string",
						"description": "Created at date time in ISO format"
					},
					"updatedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Last time updated at date time in ISO format"
					},
					"deletedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Deleted at date time in ISO format"
					},
					"version": {
						"type": "string",
						"description": "Entity version for optimistic lock handling"
					},
					"tenantId": {
						"type": "string",
						"description": "Tenant identifier"
					},
					"id": {
						"type": "string"
					},
					"entryPoint": {
						"type": "string"
					},
					"certificate": {
						"type": "string"
					},
					"enabled": {
						"type": "boolean"
					},
					"tenant": {
						"nullable": true,
						"allOf": [
							{
								"$ref": "#/components/schemas/Tenant"
							}
						]
					}
				},
				"required": [
					"createdAt",
					"updatedAt",
					"deletedAt",
					"version",
					"tenantId",
					"id",
					"entryPoint",
					"certificate",
					"enabled"
				]
			},
			"Tenant": {
				"type": "object",
				"properties": {
					"createdAt": {
						"format": "date-time",
						"type": "string",
						"description": "Created at date time in ISO format"
					},
					"updatedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Last time updated at date time in ISO format"
					},
					"deletedAt": {
						"format": "date-time",
						"type": "string",
						"description": "Deleted at date time in ISO format"
					},
					"version": {
						"type": "string",
						"description": "Entity version for optimistic lock handling"
					},
					"id": {
						"type": "string"
					},
					"tenantFriendlyIdentifier": {
						"type": "string"
					},
					"tenantName": {
						"type": "string"
					},
					"tenantStatus": {
						"type": "string",
						"enum": [
							"ACTIVE",
							"INACTIVE"
						]
					},
					"ownerId": {
						"type": "string"
					},
					"owner": {
						"$ref": "#/components/schemas/UserProfile"
					},
					"samlConfigurations": {
						"type": "array",
						"items": {
							"$ref": "#/components/schemas/SAMLConfiguration"
						}
					},
					"tenantUsersAccount": {
						"type": "array",
						"items": {
							"$ref": "#/components/schemas/UserTenantAccount"
						}
					}
				},
				"required": [
					"createdAt",
					"updatedAt",
					"deletedAt",
					"version",
					"id",
					"tenantFriendlyIdentifier",
					"tenantName",
					"tenantStatus",
					"ownerId"
				]
			},
			"UpdateUserRole": {
				"type": "object",
				"properties": {
					"version": {
						"type": "string",
						"description": "Entity version for optimistic lock handling"
					},
					"name": {
						"type": "string"
					},
					"description": {
						"type": "string"
					},
					"tenant": {
						"nullable": true,
						"description": "Tenants can have their own roles, but they can also inherit roles from the platform.",
						"allOf": [
							{
								"$ref": "#/components/schemas/Tenant"
							}
						]
					}
				},
				"required": [
					"version",
					"name",
					"description"
				]
			},
			"IdpMappingDto": {
				"type": "object",
				"properties": {
					"firstName": {
						"type": "string"
					},
					"lastName": {
						"type": "string"
					},
					"email": {
						"type": "string"
					},
					"role": {
						"type": "string"
					}
				},
				"required": [
					"firstName",
					"lastName",
					"email",
					"role"
				]
			},
			"SetupSamlConfiguration": {
				"type": "object",
				"properties": {
					"entryPoint": {
						"type": "string"
					},
					"certificate": {
						"type": "string"
					},
					"fieldsMapping": {
						"$ref": "#/components/schemas/IdpMappingDto"
					},
					"enabled": {
						"type": "boolean"
					}
				},
				"required": [
					"entryPoint",
					"certificate",
					"fieldsMapping",
					"enabled"
				]
			},
			"SetupSamlConfigurationResponseDTO": {
				"type": "object",
				"properties": {
					"message": {
						"type": "string"
					},
					"id": {
						"type": "string"
					}
				},
				"required": [
					"message",
					"id"
				]
			}
		}
	}
}
