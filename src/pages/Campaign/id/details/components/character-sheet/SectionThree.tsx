import { useCharSheetContext } from "./CharSheetContext";
import "./SectionThree.css";

const SectionThree = () => {
  const { charSheetData, setCharSheetData } = useCharSheetContext();

  return (
    <div className="MegaContainer">
      <div className="yellow">
        <div>
          <div className="armor_class">
            <p>CLASSE DE ARMADURA</p>
            <input
              type="text"
              name="armor_class"
              maxLength={2}
              value={charSheetData.armorClass}
              onChange={(e) =>
                setCharSheetData({
                  ...charSheetData,
                  armorClass: e.target.value,
                })
              }
            />
          </div>
          <div className="initiative_and_displacement">
            <div>
              <p id="iniciative">INICIATIVA</p>
              <input
                type="text"
                name="initiative"
                maxLength={2}
                value={charSheetData.initiative}
                onChange={(e) =>
                  setCharSheetData({
                    ...charSheetData,
                    initiative: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <p id="movement">DESLOCAMENTO</p>
              <input
                type="text"
                name="speed"
                maxLength={2}
                value={charSheetData.speed}
                onChange={(e) =>
                  setCharSheetData({
                    ...charSheetData,
                    speed: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="health_points">
          <div className="max_health">
            <p>PONTOS DE VIDA MÁXIMOS</p>
            <input
              type="number"
              maxLength={4}
              value={charSheetData.maxHp}
              onChange={(e) =>
                setCharSheetData({
                  ...charSheetData,
                  maxHp: e.target.value,
                })
              }
            />
          </div>
          <div className="health_points2">
            <input
              type="number"
              maxLength={4}
              value={charSheetData.currentHp}
              onChange={(e) =>
                setCharSheetData({
                  ...charSheetData,
                  currentHp: e.target.value,
                })
              }
            />
            <p>PONTOS DE VIDA ATUAIS</p>
          </div>
        </div>
        <div className="temporary_hit_points">
          <input
            type="text"
            maxLength={4}
            value={charSheetData.tempHp}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                tempHp: e.target.value,
              })
            }
          />
          <p>PONTOS DE VIDA TEMPORÁRIOS</p>
        </div>
        <div className="life_points">
          <div className="health_data">
            <div className="total">
              <p>TOTAL</p>
              <input
                type="text"
                maxLength={5}
                value={charSheetData.totalHitDice}
                onChange={(e) =>
                  setCharSheetData({
                    ...charSheetData,
                    totalHitDice: e.target.value,
                  })
                }
              />
            </div>
            <input
              type="text"
              maxLength={5}
              value={charSheetData.hitDice}
              onChange={(e) =>
                setCharSheetData({
                  ...charSheetData,
                  hitDice: e.target.value,
                })
              }
            />
            <p>DADO DE VIDA</p>
          </div>
          <div className="successes_and_failures">
            <div className="successes">
              <p>SUCESSOS</p>
              <input
                type="checkbox"
                checked={charSheetData.success1}
                onChange={(e) =>
                  setCharSheetData({
                    ...charSheetData,
                    success1: e.target.checked,
                  })
                }
              />
              <input
                type="checkbox"
                checked={charSheetData.success2}
                onChange={(e) =>
                  setCharSheetData({
                    ...charSheetData,
                    success2: e.target.checked,
                  })
                }
              />
              <input
                type="checkbox"
                checked={charSheetData.success3}
                onChange={(e) =>
                  setCharSheetData({
                    ...charSheetData,
                    success3: e.target.checked,
                  })
                }
              />
            </div>
            <div className="failures">
              <p>FALHAS</p>
              <input
                type="checkbox"
                checked={charSheetData.fail1}
                onChange={(e) =>
                  setCharSheetData({
                    ...charSheetData,
                    fail1: e.target.checked,
                  })
                }
              />
              <input
                type="checkbox"
                checked={charSheetData.fail2}
                onChange={(e) =>
                  setCharSheetData({
                    ...charSheetData,
                    fail2: e.target.checked,
                  })
                }
              />
              <input
                type="checkbox"
                checked={charSheetData.fail3}
                onChange={(e) =>
                  setCharSheetData({
                    ...charSheetData,
                    fail3: e.target.checked,
                  })
                }
              />
            </div>
            <p>SALVAGUARDA CONTRA MORTE</p>
          </div>
        </div>
      </div>

      <div className="red">
        <div className="title_container">
          <p>NOME</p>
          <p>BÔNUS ATAQUE</p>
          <p>DANO/TIPO</p>
        </div>
        <div className="input_container">
          <input
            type="text"
            className="bigger"
            value={charSheetData.attack1.name}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                attack1: {
                  ...charSheetData.attack1,
                  name: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            className="smaller"
            value={charSheetData.attack1.bonus}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                attack1: {
                  ...charSheetData.attack1,
                  bonus: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            className="bigger"
            value={charSheetData.attack1.damage}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                attack1: {
                  ...charSheetData.attack1,
                  damage: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="input_container">
          <input
            type="text"
            className="bigger"
            value={charSheetData.attack2.name}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                attack2: {
                  ...charSheetData.attack2,
                  name: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            className="smaller"
            value={charSheetData.attack2.bonus}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                attack2: {
                  ...charSheetData.attack2,
                  bonus: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            className="bigger"
            value={charSheetData.attack2.damage}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                attack2: {
                  ...charSheetData.attack2,
                  damage: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="input_container">
          <input
            type="text"
            className="bigger"
            value={charSheetData.attack3.name}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                attack3: {
                  ...charSheetData.attack3,
                  name: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            className="smaller"
            value={charSheetData.attack3.bonus}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                attack3: {
                  ...charSheetData.attack3,
                  bonus: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            className="bigger"
            value={charSheetData.attack3.damage}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                attack3: {
                  ...charSheetData.attack3,
                  damage: e.target.value,
                },
              })
            }
          />
        </div>
        <textarea
          cols={32}
          rows={10}
          value={charSheetData.attacksAndSpellcasting}
          onChange={(e) =>
            setCharSheetData({
              ...charSheetData,
              attacksAndSpellcasting: e.target.value,
            })
          }
        />
        <p>ATAQUES & CONJURAÇÃO</p>
      </div>

      <div className="blue">
        <div className="big_purple_container">
          <textarea
            cols={30}
            rows={10}
            value={charSheetData.personalityTraits}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                personalityTraits: e.target.value,
              })
            }
          />
          <p>TRAÇOS DE PERSONALIDADE</p>
        </div>
        <div>
          <div className="purple_container">
            <textarea
              cols={30}
              rows={10}
              value={charSheetData.ideals}
              onChange={(e) =>
                setCharSheetData({
                  ...charSheetData,
                  ideals: e.target.value,
                })
              }
            />
            <p>IDEAIS</p>
          </div>
          <div className="purple_container">
            <textarea
              cols={30}
              rows={10}
              value={charSheetData.bonds}
              onChange={(e) =>
                setCharSheetData({
                  ...charSheetData,
                  bonds: e.target.value,
                })
              }
            />
            <p>VÍNCULOS</p>
          </div>
          <div className="purple_container">
            <textarea
              cols={30}
              rows={10}
              value={charSheetData.flaws}
              onChange={(e) =>
                setCharSheetData({
                  ...charSheetData,
                  flaws: e.target.value,
                })
              }
            />
            <p>FRAQUEZAS</p>
          </div>
        </div>
      </div>

      <div className="green">
        <textarea
          cols={30}
          rows={10}
          value={charSheetData.featuresAndTraits}
          onChange={(e) =>
            setCharSheetData({
              ...charSheetData,
              featuresAndTraits: e.target.value,
            })
          }
        />
        <p>CARACTERÍSTICAS & TALENTOS</p>
      </div>
    </div>
  );
};

export default SectionThree;