export const guideBlocks = 
[
    {
        "blocks": {
            "languageVersion": 0,
            "blocks": [
                {
                    "type": "controls_if",
                    "id": "NG]!eI:4~]eK5@,qzd_F",
                    "x": -10,
                    "y": 42,
                    "inputs": {
                        "IF0": {
                            "block": {
                                "type": "logic_compare",
                                "id": "d~aD7$k?=wEk-n]ka~}Y",
                                "fields": {
                                    "OP": "LT"
                                },
                                "inputs": {
                                    "A": {
                                        "block": {
                                            "type": "cur_data",
                                            "id": "vTX@z3Hf-D{~mdRkz42`",
                                            "inputs": {
                                                "OCHL": {
                                                    "shadow": {
                                                        "type": "ochlv_value",
                                                        "id": "U_P9,]J@wRf9A#|BL[QZ",
                                                        "fields": {
                                                            "FIELDNAME": "5"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "B": {
                                        "block": {
                                            "type": "calculate_scope_data",
                                            "id": "tnGd)Yb#f3qsU(_pN{,m",
                                            "inputs": {
                                                "SCOPE": {
                                                    "shadow": {
                                                        "type": "term_scope",
                                                        "id": "M3rGSK:f9yD7d1@[2fn5",
                                                        "fields": {
                                                            "DATE": "14"
                                                        }
                                                    }
                                                },
                                                "OCHL": {
                                                    "shadow": {
                                                        "type": "ochlv_value",
                                                        "id": "_:JDnUl/ocNSGP63p@fQ",
                                                        "fields": {
                                                            "FIELDNAME": "5"
                                                        }
                                                    }
                                                },
                                                "HLA": {
                                                    "shadow": {
                                                        "type": "minmaxavg_select",
                                                        "id": "R*9q@d`/R=7sw#q%s$(s",
                                                        "fields": {
                                                            "FIELDNAME": "\"rsi\""
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "DO0": {
                            "block": {
                                "type": "buy",
                                "id": ",AyJWhYEV`?,=H,gXcRl",
                                "inputs": {
                                    "NAME": {
                                        "shadow": {
                                            "type": "cnt_per_asset",
                                            "id": "o8|P6sGQS!(T?uPMy5S_",
                                            "inputs": {
                                                "NAME": {
                                                    "shadow": {
                                                        "type": "math_number",
                                                        "id": "Rrt8+P[U$-(:8=R|:Au,",
                                                        "fields": {
                                                            "NUM": 20
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "next": {
                        "block": {
                            "type": "controls_if",
                            "id": "yPI$oX%cxK+YI$tfbk!Q",
                            "inputs": {
                                "IF0": {
                                    "block": {
                                        "type": "logic_compare",
                                        "id": "a.fJS9oCGRSWQPY,E*,k",
                                        "fields": {
                                            "OP": "GT"
                                        },
                                        "inputs": {
                                            "A": {
                                                "block": {
                                                    "type": "cur_data",
                                                    "id": "+_Rb?g]bHR$X^mS@_{06",
                                                    "inputs": {
                                                        "OCHL": {
                                                            "shadow": {
                                                                "type": "ochlv_value",
                                                                "id": "x`6jx==bn?l7u95t%aF#",
                                                                "fields": {
                                                                    "FIELDNAME": "5"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "B": {
                                                "block": {
                                                    "type": "calculate_scope_data",
                                                    "id": "Dd3c:PK^v6iUW^S#*wf/",
                                                    "inputs": {
                                                        "SCOPE": {
                                                            "shadow": {
                                                                "type": "term_scope",
                                                                "id": "O4qQKB$s3(36UMp5;G1.",
                                                                "fields": {
                                                                    "DATE": "14"
                                                                }
                                                            }
                                                        },
                                                        "OCHL": {
                                                            "shadow": {
                                                                "type": "ochlv_value",
                                                                "id": "RHJ}TcqzfGD./CSLaDf$",
                                                                "fields": {
                                                                    "FIELDNAME": "5"
                                                                }
                                                            }
                                                        },
                                                        "HLA": {
                                                            "shadow": {
                                                                "type": "minmaxavg_select",
                                                                "id": "/84%5h4iAq)#)6dOH-1G",
                                                                "fields": {
                                                                    "FIELDNAME": "\"max\""
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "DO0": {
                                    "block": {
                                        "type": "sell",
                                        "id": "d]R~P6%IOWEl?WtSi-sI",
                                        "inputs": {
                                            "NAME": {
                                                "shadow": {
                                                    "type": "cnt_per_reserve",
                                                    "id": "{)|,4T@#S[Iz36=M3Lkf",
                                                    "inputs": {
                                                        "NAME": {
                                                            "shadow": {
                                                                "type": "math_number",
                                                                "id": "%(gVvA;m)/jyadxY80RZ",
                                                                "fields": {
                                                                    "NUM": 20
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
];
