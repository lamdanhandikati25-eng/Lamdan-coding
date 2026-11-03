
import math

def f(t):
    return 40 * t - 300 - 400 * math.exp(-0.3 * t)

def turunan(t):
    return 40 + 120 * math.exp(-0.3 * t)

# Nilai awal
t = 8.0
epsilon = 0.0001
iterasi = 0

print("PROGRAM METODE NEWTON-RAPHSON")
print("PERHITUNGAN KEBOCORAN MEMORI SERVER")
print("=" * 95)

print("{:<10} {:<15} {:<15} {:<15} {:<15} {:<15}".format(
    "Iterasi", "t_n", "f(t_n)", "f'(t_n)", "t_n+1", "Delta"
))

while True:
    hasil_f = f(t)
    hasil_turunan = turunan(t)

    t_baru = t - (hasil_f / hasil_turunan)
    delta = abs(t_baru - t)

    print("{:<10} {:<15.6f} {:<15.6f} {:<15.6f} {:<15.6f} {:<15.6f}".format(
        iterasi, t, hasil_f, hasil_turunan, t_baru, delta
    ))

    iterasi += 1
    t = t_baru

    if delta < epsilon:
        break

print("=" * 95)
print("HASIL PERHITUNGAN")
print("Waktu memori penuh: {:.6f} jam".format(t))
print("Jumlah iterasi:", iterasi)
print("Rekomendasi restart: setiap 8 jam")
