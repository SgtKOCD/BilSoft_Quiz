(function(){

    
    angular
        .module("bilsoftQuiz")
        .factory("DataService", DataService);

   
    function DataService(){
       
        var dataObj = {
            egitimData: egitimData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers,
            video:video,
            asd:asd
        };

        
        return dataObj;
    }

    // burada dataları tutuyoruz cevapları soruları ve eğitim konularını https://www.youtube.com/watch?v=IWpZSeS0PjE

    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3, 2, 0, 1, 1, 3, 1, 3, 2];
    // var video=["https://youtu.be/IWpZSeS0PjE",
    // "https://youtu.be/Hmfn4NYvI4E",
    // "https://youtu.be/3nmYXBRlZWw",
    // "https://youtu.be/xRGvR9jJ8cI",
    // "https://youtu.be/vW8vSprRVj4",
    // "https://youtu.be/-1ZkzBXZKnI",
    // "https://youtu.be/20hVmGRV0mA",
    // "https://youtu.be/e5jrl3VBJdc",
    // "https://youtu.be/qG7Ofw9DxLc",
    // "https://youtu.be/FpPMh1GHKCA",
    // "https://youtu.be/WQDKK5EFg98",
    // "https://youtu.be/V4N1c7PJFzY",
    // "https://youtu.be/XpLowSQAzno",
    // "https://youtu.be/DF0Dq91hU5k",
    // "https://youtu.be/LFG5_sp9TKo",
    // "https://youtu.be/DgbpegiNqfs",
    // "https://youtu.be/xR5O8y_rFc0",
    // "https://youtu.be/9kDVeXQysUA"]; 

     var video=[{adres:["Cari-Hesaplar.mp4"]},{adres:["Hesap-Kartı-Ekleme.mp4"]},{adres:["Stok-Kartlar-Bölümü.mp4"]},{adres:["Alış-Satış-Paneli.mp4"]},{adres:["Hızlı-Satış-Paneli.mp4"]},
     {adres:["Fatura-Bölümü.mp4"]},{adres:["Kasa-Bölümü.mp4"]},{adres:["Taksit-Takip-Bölümü.mp4"]},{adres:["Teklif-Sipariş-Bölümü.mp4"]},{adres:["Yedekleme-Modülü.mp4"]},{adres:["Sms-Modülü.mp4"]},
     {adres:["Banka-Bölümü.mp4"]},{adres:["E-Fatura_E-Arşiv-Programı.mp4"]},{adres:["E-Fatura.mp4"]},{adres:["E-Arşiv.mp4"]},{adres:["İhracat-Faturası-ve-Gelen-Fatura-Takibi.mp4"]},
     {adres:["E-İrsaliye.mp4"]},{adres:["Personel-Takip-Programı.mp4"]}];
     
    var quizQuestions  = [
        {
            type: "text",
            text: "soru1",
            //video_url:"Cari-Hesaplar.mp4",
            
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru2",
            //video_url:"Hesap-Kartı-Ekleme.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru3",
            //video_url:"Stok-Kartlar-Böümü.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru4",
            //video_url:"Alış-Satış-Paneli.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru5",
            //video_url:"Hızlı-Satış-Paneli.mp4",
            
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru6",
            //video_url:"Fatura-Bölümü.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru7",
            //video_url:"Kasa-Bölümü.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru8",
            //video_url:"Taksit-Takip-Bölümü.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru9",
            //video_url:"Teklif-Sipariş-Bölümü.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru10",
            //video_url:"Yedekleme-Modülü.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru11",
            //video_url:"Sms-Modülü.mp4",
            
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru12",
            //video_url:"Banka-Bölümü.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru13",
            //video_url:"E-Fatura_E-Arşiv-Programı.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru14",
            //video_url:"E-Fatura.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru15",
            //video_url:"E-Arşiv.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru16",
            //video_url:"İhracat-Faturası-ve-Gelen-Fatura-Takibi.mp4",
            
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru17",
            //video_url:"E-İrsaliye.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "soru18",
            //video_url:"Personel-Takip-Programı.mp4",
            possibilities: [
                {
                    answer: "cavap1"
                },
                {
                    answer: "cevap2"
                },
                {
                    answer: "cevap3"
                },
                {
                    answer: "cevap4"
                }
            ],
            selected: null,
            correct: null
        },
    ];

    var egitimData = [
        {
            type: "Cari Hesaplar",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/IWpZSeS0PjE",
            aciklama: "açıklama"
        },
        {
            type: "Hesap Kartı Ekleme",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/Hmfn4NYvI4E",
            aciklama: "açıklama"
        },
        {
            type: "Stok Kartlar Bölümü",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/3nmYXBRlZWw",
            aciklama: "açıklama"
        },
        {
            type: "Alış-Satış Paneli",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/xRGvR9jJ8cI",
            aciklama: "açıklama"
        },
        {
            type: "Hızlı Satış Paneli",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/vW8vSprRVj4",
            aciklama: "açıklama"
        },
        {
            type: "Fatura Bölümü",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/-1ZkzBXZKnI",
            aciklama: "açıklama"
        },
        {
            type: "Kasa Bölümü",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/20hVmGRV0mA",
            aciklama: "açıklama"
        },
        {
            type: "Taksit takip Bölümü",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/e5jrl3VBJdc",
            aciklama: "açıklama"
        },
        {
            type: "Teklif Sipariş Bölümü",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/qG7Ofw9DxLc",
            aciklama: "açıklama"
        },
        {
            type: "Yedekleme Modülü",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/FpPMh1GHKCA",
            aciklama: "açıklama"
        },
        {
            type: "SMS Modülü",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/WQDKK5EFg98",
            aciklama: "açıklama"
        },
        {
            type: "Banka Bölümü",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/V4N1c7PJFzY",
            aciklama: "açıklama"
        },
        {
            type: " E-Fatura/E-Arşiv Programı",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/XpLowSQAzno",
            aciklama: "açıklama"
        },
        {
            type: "Bölüm 1 - E-Fatura",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/DF0Dq91hU5k",
            aciklama: "açıklama"
        },
        {
            type: "Bölüm 2 - E-Arşiv",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/LFG5_sp9TKo",
            aciklama: "açıklama"
        },
        {
            type: "Bölüm 3 - İhracat Faturası ve Gelen Fatura Takibi",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/DgbpegiNqfs",
            aciklama: "açıklama"
        },
        {
            type: "E-İrsaliye",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/xR5O8y_rFc0",
            aciklama: "açıklama"
        },
        {
            type: "Personel Takip Programı",
            image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///8ASI71gyAASJAAQo7i4d8WPGp/gYEAPYn5hB7b3+GwYyQAQ4z1ewAARY383cehtM6XrMj5gxWIdWqUZURYYW8mXZr91Lnb2tgAOGvy9/rl6/FUd6gAOnoAM4UAP4ewr632l0v2kDvWcBG9vLn6w5+zur1KcKSVlpXu9fsAOIeLjY7R2OQAMoScnJry8fH3omX7t4hdf6395tT/9e2uvtTD0OCmk4iugGD0dAAAJYAUUpR3kbc+Z5yGmLRpfZo1WYo2Y52ZpLTHx8f4qXFZaoQtTnrMgUlcXFlNX3mOmKVucG8qPFN4fodkcXc2QEzDahlFS1Lp2MsYOWDdmGafpqpMTUthYFyGVTJ8XEbtwaTcsJSETiTPwbhbQS8XSH+vaDJAXYYLLE/k4E3AAAAEaklEQVR4nO3Z/1/aRhzH8eNbm9gQK9soooJfqF9wgLPiuqL9MtquXbXWOeyXdeu2//+PWJI7BJK7mNQHro9HX8+fIPnk7t4JyR0gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgazCrd++iYE9u2Bu9iLFwe87ooqZ7O6L7faihfU1DQkQPHJlb0A/px6LBTyuzQUH1vnx7Z/hi1pxvv9yyjB7Imm5PW1Nz50btLBzUmpoSMdBsHbUfPknKN6WsgV3cCRJ+G1QU7wxfmBPuttyMWcsv6Rw2DTVusze8CN2mlYsW5CzRrmu2DzVTJ8xmS6upEh5aMfm8hFUvYC9vLnDcraCdhzVtjmkkzJZ2UiR8FB8wSPjYiatwnvjt/FzT751KQj9O0oT9ZnzATK3q3UeXlOwLUWkaUlwxoV0KseVFfJo44TN1eRyTB1ud5+oedPKTnJwcubNx0U4uH9ES7ebYIbKp0e74J439y81JL26piEkTFuZll/WX3xn8KvpLssZ6Furt1VFG7qmJiqzJ9Y5vhvVFY+yQG0GdMyob6AOqhKUfwttfr8mPadKEDTkyq2vox7dclwHnInv6JyrhVtuK/ciFz2jTMAmOMSXsv7FTJVxeurzHzbqKodklD69tDWsuG3nlygkbpc+6hs5uTF/D0VeNh08vob1zNyQbXEJ7JWnCypm6D3sbvsXFXeXg4GG3mjqh67UQsjERJm1CbwEzSc0hxbtJE3ZO1Vzu+sYeofm81czPpU2YcSPP4tbVEpqm/OQz/uZ83FxVrqZMqGljGglLvyVP2DnPxETMl7/MhN5tmHzV1j+Ji2gdfJEJU9yHfqfn825OQw7Qu43SJIw2U7tiwrUQ+SxNPlv4Ou3Ts/mlMHVlvXk+RcJcpJml+pUSln5fnzQ4V2uaeykSehkrjYi3n+RMuZgmoTVYDutPHHD1GX/mnT0ZLFFCberTYL3t9v7XGT+aMBLMe2F/VkJx7Ewm1K05l+VytLa1fW0JC9FP6fvS8PmaSuexqz6l6uud24sMS9VkWmJaCbOrKyGlyJNGvJab7OJqxFNRKJvU3eGTpqEWBW7tcGOSJb8UuuXpJczaIWrK3xlLuK6+M0Zqba9s03INZCr/YV84Gk6YoTWZqvHPwvQSGubDvbGE1XNTmZ/QOFOrwXszvni1FLMm8HNXrzth8cPYI0eI9XeGYi9hOz6h46/aROHEjYmY83+mudaEdvEPMZFQbH5Ut2fahFa5E/TWODJHdGv+7wPTSBi5q9S9VXzzp5AJ/bdBQjH4a01XH9yHugVbwM03H3VUd/3zeUdf1PwUTOnb9eBtK0HC6FJOn/CW3t/3l+WPDdX3coP8I2Nm++1HTfUH78vTDZPnx5VRf532i6MzTc3LgTwJ27KdfzS/dEwm/FfWaVYPIYUZvdG5URsu3i9oqr2RF4w6oS51pZ3QzvAxmoEnrAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr81/G5bHtGbEmzgAAAAASUVORK5CYII=",
            egitim_url:"https://youtu.be/9kDVeXQysUA",
            aciklama: "açıklama"
        }
    ];

})();
