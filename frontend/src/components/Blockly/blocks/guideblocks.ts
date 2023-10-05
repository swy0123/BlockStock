export const guideBlocks = [
  {
    tacticCode: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: "custom_value_def_maxDif",
            id: "c74z|7cowyI:lb/bm(7E",
            x: -433,
            y: 258,
            fields: {
              custom_value_def_maxDif: "maxDif",
            },
            next: {
              block: {
                type: "custom_value_def_maxAvg",
                id: "c3djivZf,S,VwP7c[}J;",
                fields: {
                  custom_value_def_maxAvg: "maxAvg",
                },
                next: {
                  block: {
                    type: "custom_value_def_minDif",
                    id: ",j.TN-1OC%V{|4pWmRgb",
                    fields: {
                      custom_value_def_minDif: "minDif",
                    },
                    next: {
                      block: {
                        type: "custom_value_def_minAvg",
                        id: "1b?w4af~e%n~Pk?c,z}Q",
                        fields: {
                          custom_value_def_minAvg: "minAvg",
                        },
                        next: {
                          block: {
                            type: "custom_value_def_RS",
                            id: "!u77b_-e47tKJ|0!y.2U",
                            fields: {
                              custom_value_def_RS: "RS",
                            },
                            next: {
                              block: {
                                type: "custom_value_def_RSI",
                                id: "R.4f0f|KDfV*k(UI;vZt",
                                fields: {
                                  custom_value_def_RSI: "RSI",
                                },
                                next: {
                                  block: {
                                    type: "controls_for",
                                    id: "WO*;8OpigWb@|,y-[avP",
                                    fields: {
                                      VAR: {
                                        id: "zT/_b-Fu!Tjqj1;5}!U(",
                                      },
                                    },
                                    inputs: {
                                      FROM: {
                                        block: {
                                          type: "math_arithmetic",
                                          id: ".m3k.U%},:|KdVD(Dv{;",
                                          fields: {
                                            OP: "MINUS",
                                          },
                                          inputs: {
                                            A: {
                                              block: {
                                                type: "now_cnt",
                                                id: "4/hoO3S4B]~Z}=zYzeAp",
                                              },
                                            },
                                            B: {
                                              block: {
                                                type: "math_number",
                                                id: "T`8{cd]!8x6.Fb;qO8v3",
                                                fields: {
                                                  NUM: 14,
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      BY: {
                                        block: {
                                          type: "math_number",
                                          id: "_qSA}fNkt~ED,mhW8)i@",
                                          fields: {
                                            NUM: 1,
                                          },
                                        },
                                      },
                                      TO: {
                                        block: {
                                          type: "now_cnt",
                                          id: "l}MOa7;];=SKpi1}}l~@",
                                        },
                                      },
                                      DO: {
                                        block: {
                                          type: "controls_ifelse",
                                          id: "LmEiGS5UG$y};-}Uq#H`",
                                          inputs: {
                                            IF0: {
                                              block: {
                                                type: "logic_compare",
                                                id: "dm!~Uszxj4AI8A]$.iU=",
                                                fields: {
                                                  OP: "GTE",
                                                },
                                                inputs: {
                                                  A: {
                                                    block: {
                                                      type: "math_arithmetic",
                                                      id: "lW@Kw,k@T(Wq-$Zv;3a.",
                                                      fields: {
                                                        OP: "MINUS",
                                                      },
                                                      inputs: {
                                                        A: {
                                                          block: {
                                                            type: "specific_term_data",
                                                            id: "jd0M{G75s%Asc4.#)r.$",
                                                            fields: {
                                                              Number: "ii",
                                                            },
                                                            inputs: {
                                                              OCHL: {
                                                                shadow: {
                                                                  type: "ochlv_value",
                                                                  id: "^9o|EB#jp.@i#rHP(Gws",
                                                                  fields: {
                                                                    FIELDNAME: "5",
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                        B: {
                                                          block: {
                                                            type: "specific_term_data",
                                                            id: "s(w2[FVaz=Q;/SA1^s*c",
                                                            fields: {
                                                              Number: "ii-1",
                                                            },
                                                            inputs: {
                                                              OCHL: {
                                                                shadow: {
                                                                  type: "ochlv_value",
                                                                  id: "-$A1YAW}l8|C-@ln8bfg",
                                                                  fields: {
                                                                    FIELDNAME: "5",
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                  B: {
                                                    block: {
                                                      type: "math_number",
                                                      id: "Vi1uoIuSt3SFTgGN.ma/",
                                                      fields: {
                                                        NUM: 0,
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            DO0: {
                                              block: {
                                                type: "custom_value_set_maxAvg",
                                                id: "9oN0}d=X6GKGvx|?|TDu",
                                                fields: {
                                                  custom_value_set_maxAvg: "maxAvg",
                                                },
                                                inputs: {
                                                  Number: {
                                                    block: {
                                                      type: "math_arithmetic",
                                                      id: "_}mRG!*uXB)/A`}[6!//",
                                                      fields: {
                                                        OP: "ADD",
                                                      },
                                                      inputs: {
                                                        A: {
                                                          block: {
                                                            type: "custom_value_get_maxAvg",
                                                            id: "I5O)KfU$$P3/.zBZ]B=0",
                                                            fields: {
                                                              custom_value_get_maxAvg: "maxAvg",
                                                            },
                                                          },
                                                        },
                                                        B: {
                                                          block: {
                                                            type: "math_arithmetic",
                                                            id: "Sz8F~E)Wm`rG*wqpFL!8",
                                                            fields: {
                                                              OP: "MINUS",
                                                            },
                                                            inputs: {
                                                              A: {
                                                                block: {
                                                                  type: "specific_term_data",
                                                                  id: "nZt|P[lf9Uw1a@;oNY+^",
                                                                  fields: {
                                                                    Number: "ii",
                                                                  },
                                                                  inputs: {
                                                                    OCHL: {
                                                                      shadow: {
                                                                        type: "ochlv_value",
                                                                        id: "x:Ub1gVH?81WMe93SY4m",
                                                                        fields: {
                                                                          FIELDNAME: "5",
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                              B: {
                                                                block: {
                                                                  type: "specific_term_data",
                                                                  id: "@t]hp}ob!%^.Qc~$O#jf",
                                                                  fields: {
                                                                    Number: "ii-1",
                                                                  },
                                                                  inputs: {
                                                                    OCHL: {
                                                                      shadow: {
                                                                        type: "ochlv_value",
                                                                        id: "=`3Joxzfc!_;L[7zQ1ht",
                                                                        fields: {
                                                                          FIELDNAME: "5",
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            ELSE: {
                                              block: {
                                                type: "custom_value_set_minAvg",
                                                id: "T0Gwf^TMgNK~5YoaY$Ez",
                                                fields: {
                                                  custom_value_set_minAvg: "minAvg",
                                                },
                                                inputs: {
                                                  Number: {
                                                    block: {
                                                      type: "math_arithmetic",
                                                      id: "hu`H4UqT?4497W9G9!6b",
                                                      fields: {
                                                        OP: "ADD",
                                                      },
                                                      inputs: {
                                                        A: {
                                                          block: {
                                                            type: "custom_value_get_minAvg",
                                                            id: "YIG-1ICgN=Lq$Ab@8k$;",
                                                            fields: {
                                                              custom_value_get_minAvg: "minAvg",
                                                            },
                                                          },
                                                        },
                                                        B: {
                                                          block: {
                                                            type: "math_arithmetic",
                                                            id: "CH~Is2Igz6.Q8Ws6tmU]",
                                                            fields: {
                                                              OP: "MINUS",
                                                            },
                                                            inputs: {
                                                              A: {
                                                                block: {
                                                                  type: "specific_term_data",
                                                                  id: "%b(r]aAwG72nK(%@:3pc",
                                                                  fields: {
                                                                    Number: "ii-1",
                                                                  },
                                                                  inputs: {
                                                                    OCHL: {
                                                                      shadow: {
                                                                        type: "ochlv_value",
                                                                        id: "0$aMkE12OU4_/oH0.h,:",
                                                                        fields: {
                                                                          FIELDNAME: "5",
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                              B: {
                                                                block: {
                                                                  type: "specific_term_data",
                                                                  id: "qbJ[1eFL82jJ^#@GG,g`",
                                                                  fields: {
                                                                    Number: "ii",
                                                                  },
                                                                  inputs: {
                                                                    OCHL: {
                                                                      shadow: {
                                                                        type: "ochlv_value",
                                                                        id: "omxCrUKE5BC/G,[rCu]c",
                                                                        fields: {
                                                                          FIELDNAME: "5",
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    next: {
                                      block: {
                                        type: "custom_value_set_minAvg",
                                        id: "yugI:!c}:WUxcT3]6DRK",
                                        fields: {
                                          custom_value_set_minAvg: "minAvg",
                                        },
                                        inputs: {
                                          Number: {
                                            block: {
                                              type: "math_arithmetic",
                                              id: "2Ex]~*Z;@rU5quki!?OQ",
                                              fields: {
                                                OP: "DIVIDE",
                                              },
                                              inputs: {
                                                A: {
                                                  block: {
                                                    type: "custom_value_get_minAvg",
                                                    id: "!h}+%Q+I0i[J(v!-hy~W",
                                                    fields: {
                                                      custom_value_get_minAvg: "minAvg",
                                                    },
                                                  },
                                                },
                                                B: {
                                                  block: {
                                                    type: "math_number",
                                                    id: "gU##iJ.B%4WhH4|H;sMc",
                                                    fields: {
                                                      NUM: 14,
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                        next: {
                                          block: {
                                            type: "custom_value_set_maxAvg",
                                            id: "b~+V3QD/f.ba+!Om,dWv",
                                            fields: {
                                              custom_value_set_maxAvg: "maxAvg",
                                            },
                                            inputs: {
                                              Number: {
                                                block: {
                                                  type: "math_arithmetic",
                                                  id: "gQLj6V^ux~I*~oF|J6W(",
                                                  fields: {
                                                    OP: "DIVIDE",
                                                  },
                                                  inputs: {
                                                    A: {
                                                      block: {
                                                        type: "custom_value_get_maxAvg",
                                                        id: "I/nzw3dJpoP@a81?jN^b",
                                                        fields: {
                                                          custom_value_get_maxAvg: "maxAvg",
                                                        },
                                                      },
                                                    },
                                                    B: {
                                                      block: {
                                                        type: "math_number",
                                                        id: "6C*VX8v,}v@;DFA@r90_",
                                                        fields: {
                                                          NUM: 14,
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            next: {
                                              block: {
                                                type: "custom_value_set_RS",
                                                id: "pVhQOLPfQw3:gnW,ZIlF",
                                                fields: {
                                                  custom_value_set_RS: "RS",
                                                },
                                                inputs: {
                                                  Number: {
                                                    block: {
                                                      type: "math_arithmetic",
                                                      id: "NjBx[l8olTh89+`x5njz",
                                                      fields: {
                                                        OP: "DIVIDE",
                                                      },
                                                      inputs: {
                                                        A: {
                                                          block: {
                                                            type: "custom_value_get_maxAvg",
                                                            id: "[hsJ,N%T%$h9dk+f-)oz",
                                                            fields: {
                                                              custom_value_get_maxAvg: "maxAvg",
                                                            },
                                                          },
                                                        },
                                                        B: {
                                                          block: {
                                                            type: "custom_value_get_minAvg",
                                                            id: "DUh`E#Rh0[,3[t$/z%lc",
                                                            fields: {
                                                              custom_value_get_minAvg: "minAvg",
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                next: {
                                                  block: {
                                                    type: "custom_value_set_RSI",
                                                    id: "vjK(f,~j}QE4V`*-nAj.",
                                                    fields: {
                                                      custom_value_set_RSI: "RSI",
                                                    },
                                                    inputs: {
                                                      Number: {
                                                        block: {
                                                          type: "math_arithmetic",
                                                          id: "dgcmzy-`#Z`rg|ZjxG0u",
                                                          fields: {
                                                            OP: "DIVIDE",
                                                          },
                                                          inputs: {
                                                            A: {
                                                              block: {
                                                                type: "custom_value_get_RS",
                                                                id: "i79R3Mw23{4sSmhAGl.7",
                                                                fields: {
                                                                  custom_value_get_RS: "RS",
                                                                },
                                                              },
                                                            },
                                                            B: {
                                                              block: {
                                                                type: "math_arithmetic",
                                                                id: "`Lmo-qoD{0Fte+W9eBL0",
                                                                fields: {
                                                                  OP: "ADD",
                                                                },
                                                                inputs: {
                                                                  A: {
                                                                    block: {
                                                                      type: "math_number",
                                                                      id: "/k/=R4|5|^?F;BlY@{/u",
                                                                      fields: {
                                                                        NUM: 1,
                                                                      },
                                                                    },
                                                                  },
                                                                  B: {
                                                                    block: {
                                                                      type: "custom_value_get_RS",
                                                                      id: "^|Dl]+r1!!Q@T2mmUDx9",
                                                                      fields: {
                                                                        custom_value_get_RS: "RS",
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                    next: {
                                                      block: {
                                                        type: "controls_if",
                                                        id: "ri!7D_,}%]M`FEcJ-Gs2",
                                                        inputs: {
                                                          IF0: {
                                                            block: {
                                                              type: "logic_compare",
                                                              id: "m346k2gq8b=T;H3}ly|f",
                                                              fields: {
                                                                OP: "GT",
                                                              },
                                                              inputs: {
                                                                A: {
                                                                  block: {
                                                                    type: "custom_value_get_RSI",
                                                                    id: "Nm--gD;F_+Sm@Xa|D5NV",
                                                                    fields: {
                                                                      custom_value_get_RSI: "RSI",
                                                                    },
                                                                  },
                                                                },
                                                                B: {
                                                                  block: {
                                                                    type: "math_number",
                                                                    id: "uQNGwr1M(whQCGXdRNrL",
                                                                    fields: {
                                                                      NUM: 0.7,
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                          DO0: {
                                                            block: {
                                                              type: "buy",
                                                              id: "Qk(Vjx!Bt}IPI`J}G|GS",
                                                              inputs: {
                                                                NAME: {
                                                                  shadow: {
                                                                    type: "cnt_per_asset",
                                                                    id: "r#KVzxo#By-[;!,.bqm;",
                                                                    inputs: {
                                                                      NAME: {
                                                                        shadow: {
                                                                          type: "math_number",
                                                                          id: "WTC-6aY0^ey]b`~bHQXj",
                                                                          fields: {
                                                                            NUM: 10,
                                                                          },
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                        next: {
                                                          block: {
                                                            type: "controls_if",
                                                            id: "_F_P*llHU$1o7#z;JNrJ",
                                                            inputs: {
                                                              IF0: {
                                                                block: {
                                                                  type: "logic_compare",
                                                                  id: "?#*b/s0;Z^Tkl.3*.e9-",
                                                                  fields: {
                                                                    OP: "LT",
                                                                  },
                                                                  inputs: {
                                                                    A: {
                                                                      block: {
                                                                        type: "custom_value_get_RSI",
                                                                        id: "f30T?{p%qi;1Ir?0mifI",
                                                                        fields: {
                                                                          custom_value_get_RSI:
                                                                            "RSI",
                                                                        },
                                                                      },
                                                                    },
                                                                    B: {
                                                                      block: {
                                                                        type: "math_number",
                                                                        id: "EH{9!qdQF2*d6c(?leQD",
                                                                        fields: {
                                                                          NUM: 0.3,
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                              DO0: {
                                                                block: {
                                                                  type: "sell",
                                                                  id: "UgHWOL)ZxE[`j?^]n;Q@",
                                                                  inputs: {
                                                                    NAME: {
                                                                      shadow: {
                                                                        type: "cnt_per_reserve",
                                                                        id: "`KWo`_:D.I/$ry~KGn4r",
                                                                        inputs: {
                                                                          NAME: {
                                                                            shadow: {
                                                                              type: "math_number",
                                                                              id: "VtDQzR.F@SbIe{oXgV?Z",
                                                                              fields: {
                                                                                NUM: 50,
                                                                              },
                                                                            },
                                                                          },
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        ],
      },
      variables: [
        {
          name: "ii",
          id: "zT/_b-Fu!Tjqj1;5}!U(",
        },
      ],
    },
    defArray: [
      "custom_value_def_maxDif",
      "custom_value_def_maxAvg",
      "custom_value_def_minDif",
      "custom_value_def_minAvg",
      "custom_value_def_RS",
      "custom_value_def_RSI",
    ],
    settingArray: [
      "custom_value_set_maxDif",
      "custom_value_set_maxAvg",
      "custom_value_set_minDif",
      "custom_value_set_minAvg",
      "custom_value_set_RS",
      "custom_value_set_RSI",
    ],
    getArray: [
      "custom_value_get_maxDif",
      "custom_value_get_maxAvg",
      "custom_value_get_minDif",
      "custom_value_get_minAvg",
      "custom_value_get_RS",
      "custom_value_get_RSI",
    ],
  },
  {
    tacticCode: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: "controls_if",
            id: "X26f1E#bvGdsOL0+k^U0",
            x: 78,
            y: 24,
            inputs: {
              IF0: {
                block: {
                  type: "logic_compare",
                  id: "n?FJ`roA_NC$P?jqEu6S",
                  fields: {
                    OP: "LT",
                  },
                  inputs: {
                    A: {
                      block: {
                        type: "cur_data",
                        id: "2HS;3$]14C%iugXpG{9_",
                        inputs: {
                          OCHL: {
                            shadow: {
                              type: "ochlv_value",
                              id: "xFBXgB`]HPa++$X`N!Ia",
                              fields: {
                                FIELDNAME: "5",
                              },
                            },
                          },
                        },
                      },
                    },
                    B: {
                      block: {
                        type: "calculate_scope_data",
                        id: "@zAfZPO?GQ|pI!m]Xi#s",
                        inputs: {
                          SCOPE: {
                            shadow: {
                              type: "term_scope",
                              id: "A1:J^{}ArXx_;RZ||RnH",
                              fields: {
                                DATE: "7",
                              },
                            },
                          },
                          OCHL: {
                            shadow: {
                              type: "ochlv_value",
                              id: "yW#hCcq0cC:x~?!x$w,w",
                              fields: {
                                FIELDNAME: "5",
                              },
                            },
                          },
                          HLA: {
                            shadow: {
                              type: "minmaxavg_select",
                              id: "pJ~2|Ae|k$QxXb{U4lA@",
                              fields: {
                                FIELDNAME: '"min"',
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              DO0: {
                block: {
                  type: "controls_ifelse",
                  id: "(U{.pH$}$:H:Z8,LXKIL",
                  inputs: {
                    IF0: {
                      block: {
                        type: "logic_compare",
                        id: "!.Nk]xET6!pM@@Uqiv__",
                        fields: {
                          OP: "LT",
                        },
                        inputs: {
                          A: {
                            block: {
                              type: "cnt_per_reserve",
                              id: "R`Z!QCKyS!Y*#I#xpoOQ",
                              inputs: {
                                NAME: {
                                  shadow: {
                                    type: "math_number",
                                    id: "l8uxC`p.==PFujLU6PNY",
                                    fields: {
                                      NUM: 100,
                                    },
                                  },
                                },
                              },
                            },
                          },
                          B: {
                            block: {
                              type: "cnt_per_asset",
                              id: "DLaJ%YX|NvbT=JfWw_kw",
                              inputs: {
                                NAME: {
                                  shadow: {
                                    type: "math_number",
                                    id: "W$ENH]W7Jn`$/W1P+Cn?",
                                    fields: {
                                      NUM: 100,
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    DO0: {
                      block: {
                        type: "buy",
                        id: "s1[f[geTn;xa{{)dvYGa",
                        inputs: {
                          NAME: {
                            shadow: {
                              type: "cnt_per_asset",
                              id: ":GQJb;VpBK/_t|E*adCE",
                              inputs: {
                                NAME: {
                                  shadow: {
                                    type: "math_number",
                                    id: "exy*ubop3D$~XlHyUE!n",
                                    fields: {
                                      NUM: 10,
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    ELSE: {
                      block: {
                        type: "buy",
                        id: "v[+)n([GkCe^jmi9:i8J",
                        inputs: {
                          NAME: {
                            shadow: {
                              type: "cnt_per_asset",
                              id: "V]ds;S}vBhnUVy?(aufp",
                              inputs: {
                                NAME: {
                                  shadow: {
                                    type: "math_number",
                                    id: "o%_yd$2/7*=51F/lWq57",
                                    fields: {
                                      NUM: 20,
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            next: {
              block: {
                type: "controls_if",
                id: "GrsFwGo~:%%X0U%TeUE=",
                inputs: {
                  IF0: {
                    block: {
                      type: "logic_compare",
                      id: "Cz^dInsFPmFFAQJJ]9;b",
                      fields: {
                        OP: "GT",
                      },
                      inputs: {
                        A: {
                          block: {
                            type: "cur_data",
                            id: "=i:X+J0iLU4-mXTL;Rh#",
                            inputs: {
                              OCHL: {
                                shadow: {
                                  type: "ochlv_value",
                                  id: "T|)Im8:yJHrqTQp)0h)r",
                                  fields: {
                                    FIELDNAME: "5",
                                  },
                                },
                              },
                            },
                          },
                        },
                        B: {
                          block: {
                            type: "calculate_scope_data",
                            id: "/DH_Ds/[gRAo_%,C^diZ",
                            inputs: {
                              SCOPE: {
                                shadow: {
                                  type: "term_scope",
                                  id: "Qg)Z5eLz*v$NU9Mp^?V)",
                                  fields: {
                                    DATE: "7",
                                  },
                                },
                              },
                              OCHL: {
                                shadow: {
                                  type: "ochlv_value",
                                  id: "6Z!w0L:{Z8`oect5XgM]",
                                  fields: {
                                    FIELDNAME: "5",
                                  },
                                },
                              },
                              HLA: {
                                shadow: {
                                  type: "minmaxavg_select",
                                  id: "gg@sCXb4SsoE6sa5ru3r",
                                  fields: {
                                    FIELDNAME: '"max"',
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  DO0: {
                    block: {
                      type: "controls_ifelse",
                      id: "=E@ta8uZk8(y*9bsmJ-u",
                      inputs: {
                        IF0: {
                          block: {
                            type: "logic_compare",
                            id: "M=n_V^.j]bzc%rqmuEdM",
                            fields: {
                              OP: "LT",
                            },
                            inputs: {
                              A: {
                                block: {
                                  type: "cnt_per_reserve",
                                  id: "$)_Y;@HY4100{(!#I!iW",
                                  inputs: {
                                    NAME: {
                                      shadow: {
                                        type: "math_number",
                                        id: "HrA]h3KGPu2Ut8ltgY^W",
                                        fields: {
                                          NUM: 100,
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              B: {
                                block: {
                                  type: "cnt_per_asset",
                                  id: "(rqF~9LXErTSK3,W[TOf",
                                  inputs: {
                                    NAME: {
                                      shadow: {
                                        type: "math_number",
                                        id: "Irl^e2!_9:0#h/2$FWYX",
                                        fields: {
                                          NUM: 100,
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        DO0: {
                          block: {
                            type: "sell",
                            id: "B9e1~~N#g7b4;)4iIgb=",
                            inputs: {
                              NAME: {
                                shadow: {
                                  type: "cnt_per_reserve",
                                  id: "6:dd(2;dXgRHS))g#l#:",
                                  inputs: {
                                    NAME: {
                                      shadow: {
                                        type: "math_number",
                                        id: "V(ay6_pcRu{u@tLbq,O~",
                                        fields: {
                                          NUM: 10,
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        ELSE: {
                          block: {
                            type: "sell",
                            id: "W/%pIjfbpvJlDSAc4wvX",
                            inputs: {
                              NAME: {
                                shadow: {
                                  type: "cnt_per_reserve",
                                  id: "wG46;|3h?~FEc{*-ieb[",
                                  inputs: {
                                    NAME: {
                                      shadow: {
                                        type: "math_number",
                                        id: "bP@HAO[Bf3|9J(~iA-,[",
                                        fields: {
                                          NUM: 20,
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
    defArray: [],
    settingArray: [],
    getArray: [],
  },
];
